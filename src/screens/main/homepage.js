import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import MainFeaturedPost from './homeFeaturedPost';
import FeaturedPost from './homepageposts';
import Footer from './Footer';
import post1 from '../../assets/back.PNG';
import post2 from '../../assets/thumb.jpg';
import post3 from '../../assets/rawpixel.jpg';
import post5 from '../../assets/Bvuma.jpg';
import HeroSection from '../law/HeroSection';
import LawPic from '../../assets/LAW.jpg';
import HumanPic from '../../assets/HUMAN.jpg';
import CBEPic from '../../assets/CBE.jpg';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3)
    }
}));


const mainFeaturedPost = {
    title: 'Home',
    description: "This is a multidisciplinary project that aims to share stories of hope and strife from Uj students.",
    image: post1,
    imgText: 'main image description'
};

const featuredPosts = [
    {
        title: 'Public Relations',
        date: 'May 12',
        description: 'Some short inspirational piece about how moving it is to be a PR student',
        image: post2,
        imageText: 'Image Text',
        page: 'prBlog',
        linkText: 'View stories'
    }, {
        title: 'Social Work',
        date: 'May 11',
        description: 'Some short inspirational piece about how moving it is to be a Social Work student',
        image: post3,
        imageText: 'Image Text',
        page: 'lawBlog',
        linkText: 'View info'
    },
];
 const lawobj = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'LAW',
    headline: 'UJ Law',
    description:
      "This clinic is situated on the UJ main campus and although the emphasis is on general Magistrates’ Court litigation and family law, other types of cases will be considered if our court schedules allow it. It is the mainstay of our operations. Two attorneys are based here",
    buttonLabel: 'View More',
    imgStart: 'start',
    img: post3,
    path: '/lawBlog'
  };


  const humanobj = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Humanities',
    headline: 'UJ Humanities',
    description:
      'The UJ Faculty of Law offers the traditional law programmes such as BA Law, BCom Law and LLB, as well as LLM degrees by dissertation and coursework and LLD degrees in various important fields.',
    buttonLabel: 'Upload Story',
    imgStart: '',
    img: post3,
    path: '/upload'
  };


export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            <main>
                <MainFeaturedPost post={mainFeaturedPost}/>
                
                <Grid container
                    spacing={4}>
                    {
                    featuredPosts.map((post) => (
                        <FeaturedPost key={
                                post.title
                            }
                            post={post}/>
                    ))
                } </Grid>
                <HeroSection {...lawobj}/>
                <HeroSection {...humanobj}/>

                {/* <div className="cont">
                <h1> Stakeholders</h1>
                    <div className="boxy">
                        <div className="imgbox">
                            <img src={CBEPic}/>
                        </div>
                        <div className="texty">
                            <h2>College of Business
                            and Economics</h2>
                        </div>
                    </div>
                    <div className="boxy">
                        <div className="imgbox">
                            <img src={HumanPic}/>
                        </div>
                        <div className="texty">
                            <h2>Faculty of
                            Humanities</h2>
                        </div>
                    </div>
                    <div className="boxy">
                        <div className="imgbox">
                            <img src={LawPic}/>
                        </div>
                        <div className="texty">
                            <h2>Faculty of
                            Law</h2>
                        </div>
                    </div>
                </div>
            */}

            </main>

            <Footer/>
        </React.Fragment>
    );
}
