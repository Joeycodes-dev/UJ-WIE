import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 600,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  text: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    transform: 'translateX(-40%)', 
    transform: 'translateY(-40%)', 
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  bigtext:{
    fontSize:"2rem",
    
  },
  smalltext:{
    lineHeight: 1.2,
    marginRight: 200,
    fontSize: "1.2rem",
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.2,
    }, 
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Typography className={classes.text}>
      <h1 className={classes.bigtext} data-aos="zoom-in-left" data-aos-delay="400" >Welcome to our stories of hope</h1>
      <p className={classes.smalltext} data-aos="zoom-in-left" data-aos-delay="600">The project is aimed at providing students with the opportunity to play their part in being local change agents. The concept is an interdisciplinary storytelling activity in which students from various faculties work together to tell local stories of hope, resilience and how they deal with adversities. Our young people need to be given an opportunity to showcase their lived experiences and in so doing present others with hope and opportunities of change. It also forms part of a bigger nation building project.</p>
      </Typography>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
