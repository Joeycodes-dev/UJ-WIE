import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../main/header';
import firebase from '../../firebase/index';
import Pic1 from "../../assets/uploadpic.jpg";
import MaterialTooltip from "@material-ui/core/Tooltip";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Sinovalo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginTop: '5%',
  },
  image: {
    backgroundImage: `url(${Pic1})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Upload() {
  const classes = useStyles();

  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [storyName, setStoryName] = useState('');
  const [story, setStory] = useState('');



  const data = {
    auth: author,
    date: date,
    image: image,
    name: storyName,
    story: story,
    comment:[{
      "name":"Thabang",
      "message":"hello"
    },{
      "name":"Tumelo",
      "message":"hello to you too"
    },{
      "name":"olwethu",
      "message":"hello guys"
    }]

  };

  var storiesRef = firebase.db.collection('stories')

  var encode = (element) => {
    var file = element;
    var reader = new FileReader();
    reader.onloadend = function() {
      setImage(reader.result)
      console.log("Everything uploaded")
    }
    reader.readAsDataURL(file);
  }
  useEffect( () =>{ 

    storiesRef
    .get()
    .then(
      () =>{
        const d = new Date()
        setDate(d.toString().slice(0,10))
      }
    )
    .catch( error => console.log(error))
    },[]);

    useEffect( () => {
      !localStorage.getItem('currentUser') ? alert('Please Log in') : console.log('.')
    },[])

    const ClearFields = () => {
      setAuthor('');
      setDate('');
      setImage('');
      setStoryName('');
      setStory('');
    }
  
   

  const uploadStory = () => {
    storiesRef.add(data)
    .then(documentReference => {
      console.log('document reference ID', documentReference.id)
      alert('Story Uploaded!')
    })
    .catch(error => {
      console.log(error.message)
    })
    ClearFields()
  };


  return (
    <div>
      <Header />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={4} className={classes.image} />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Share Your Story
          </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="author"
                label="Author"
                name="author"
                autoComplete="email"
                autoFocus
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="storyName"
                label="Title"
                id="storyName"
                autoComplete="current-password"
                value={storyName}
                onChange={e => setStoryName(e.target.value)}
              />
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="storyName"
                label="Paste your story here"
                id="storyName"
                autoComplete="current-password"
                value={story}
                multiline
                rows={8}
                onChange={e => setStory(e.target.value)}
              />
              <Input 
              type="file" 
              onChange={e => encode(e.target.files[0])} 
              placeholder='Upload image'
              />

              <img src={image}/>
              {
                localStorage.getItem('currentUser') ?
                <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e=>uploadStory()}
              >
                Publish
            </Button> : 
           
            <Button
                disabled
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submitDisabled}
                onClick={e=>uploadStory()}
              >
                Publish
            </Button>
           
              }

              
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
