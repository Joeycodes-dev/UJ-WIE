import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../main/Footer";
import Header from "../main/header";
import "./singlePost.css";
import Pic1 from "../../assets/daniel.jpg";
import CommentModal from "./comment";
import firebase from "../../firebase/index";
import Default from "../../assets/default.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Button } from "@material-ui/core";
// Imports the Google Cloud client library
const textToSpeech = require("@google-cloud/text-to-speech");

export default function SinglePost(props) {
  let stateData = props.location.state;

  /*const commentData = stateData.comment*/

  const [com, setCom] = useState([]);
  const [playing, setPlaying] = useState(false);
 

  /* read comments from db */

  async function UpdatePost() {
    const storiesRef = firebase.db.collection("stories").doc(stateData.uid);
    const tempCom = [];
    const doc = await storiesRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      tempCom.push(doc.data());
      setCom(tempCom[0].comment);
    }
    return doc;
  }

  useEffect(() => {
    
    UpdatePost();

  }, []);

  /*Show comments*/
  const toggleComments = () => {
    var con = document.getElementsByClassName("toggle_comments");
    con[0].classList.toggle("show_comments");
  };

  const startReading = () => {
    var phrase = stateData.story;
    if ("speechSynthesis" in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = phrase;
      msg.volume = 1; // From 0 to 1
      msg.rate = 1; // From 0.1 to 10
      msg.pitch = 0; // From 0 to 2
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
      setPlaying(!playing);
    } else {
      alert("Sorry, your browser doesn't support the speech synthesis API !");
    }
  };

  const pauseReading = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
      setPlaying(!playing);
    } else {
      alert("Sorry, your browser doesn't support the speech synthesis API !");
    }
  };
  //Object.entries(commentData).map(([key, value]) => commentArray.push(value))

  /* Object.entries(commentData).forEach(comment => {
    console.log(`User ${comment[1].name} said ${comment[1].message}`);
  }); */

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="single">
          <div className="singlePost">
            <div className="singlePostWrapper">
              {stateData.image ? (
                <img className="singlePostImg" src={stateData.image} alt="" />
              ) : (
                <img className="singlePostImg" src={Default} alt="" />
              )}
              <h1 className="singlePostTitle">{stateData.name}</h1>
              <div className="singlePostEdit">
                {!playing ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={startReading}
                  >
                    Listen
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={pauseReading}
                  >
                    pause
                  </Button>
                )}
              </div>
              <div className="singlePostInfo">
                <span>
                  Author:
                  <b className="singlePostAuthor">
                    <Link className="link" to="/post">
                      {stateData.auth}
                    </Link>
                  </b>
                </span>
                <span>{stateData.date}</span>
              </div>
              <p className="singlePostDesc">{stateData.story.toString()}</p>
            </div>
            <div className="toggle_comments">
              <h2>Comments</h2>
              <div className="comments">
                {com.map((comment) => {
                  return (
                    <div className="comment">
                      <h5>
                        <span>{comment.name}</span>
                      </h5>
                      <p>{comment.message}</p>
                    </div>
                  );
                })}
              </div>
              <CommentModal {...props} update={UpdatePost}/>
            </div>
            <div className="comment-icon">
              <ChatBubbleOutlineIcon onClick={toggleComments} />
            </div>
          </div>
          <div className="sidebar">
            <span className="sidebarTitle">Next Story</span>
            <div
              className="post-content"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <div className="post-image">
                <div>
                  <img src={Pic1} className="img" alt="post" width="100%" />
                </div>
                <div className="post-info row">
                  <span>Joey</span>
                  <span>2021/05/28</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">
                  Play your Part and tell your story the way its meant to be
                  told, No unnecesary sugar and spices
                </a>
                <p>
                Play Your Part is a national initiative that encourages all South Africans to contribute to positive change. There are numerous opportunities, big and small, for each and every South African.
                </p>
              </div>
            </div>
          </div>
          <div className="post-details"></div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
