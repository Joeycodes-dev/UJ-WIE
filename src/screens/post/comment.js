import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fire from '../../firebase/index';
import firebase from 'firebase/app'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CommentModal(props) {

  let stateData = props.location.state
  console.log(props)

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');




  var storiesRef = fire.db.collection('stories')


  const uploadComment = () => {
    storiesRef.doc(stateData.uid).update({
      comment: firebase.firestore.FieldValue.arrayUnion({message: comment, name: name})
      })
      .then(function() {
        console.log("Document successfully updated!");
        handleClose();
        props.update();
      });
    
  };




  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <form className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="name"
      label="name"
      name="name"
      autoComplete="name"
      autoFocus
      value={name}
      onChange={e => setName(e.target.value)}
    />
    
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="comment"
      label="comment"
      id="comment"
      autoComplete="comment"
      value={comment}
      onChange={e => setComment(e.target.value)}
    />
    <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={uploadComment}
              >
                Publish
            </Button>
    </form>
    </div>
  );

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Add Comment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}