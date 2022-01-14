import React from "react";
import style from "./landingContent.module.scss";
import { Link } from "react-router-dom";
import Footer from "../main/Footer";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";


export default function MainLanding() {
  return (
    <>
      <div className={style.mainContainer}>
        <h2>Welcome To</h2>
        <h2>Work</h2>
        <h2>Intergrated</h2>
        <h2>Education</h2>
      </div>
      <div className={style.rowme}>


        <div className={`${style.lawCard} ${style.card}`}>
          <div className={style.wrapper}>
            <div className={style.header}>
              <div className={style.date}>
              <a href="https://twitter.com/law_uj?lang=en"><span><TwitterIcon/></span></a>
              </div>
              <ul className={style.menucontent}>
                <li>
                  <a href="https://www.facebook.com/LawUJ-208700859140832"><span><FacebookIcon/></span></a>
                </li>

              </ul>
            </div>
            <div className={style.data}>
              <div className={style.content}>
                <span className={style.author}>Law @ UJ</span>
                <h1 className={style.title}>
                  <Link to="/lawBlog">LAW</Link>
                </h1>
                <p className={style.textdes}>
                Get All The Latest WIE News From The Faculty of Law at the University of Johannesburg
                </p>
                <Link to="/lawBlog" className={style.button}>
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.humanCard} ${style.card}`}>
          <div className={style.wrapper}>
            <div className={style.header}>
              <div className={style.date}>
                <a href="https://twitter.com/ujhumanities?lang=en"><span><TwitterIcon/></span></a>
              </div>
              <ul className={style.menucontent}>
                <li>
                  <a href="https://www.facebook.com/UJHumanities/"><span><FacebookIcon/></span></a>
                </li>
              </ul>
            </div>
            <div className={style.data}>
              <div className={style.content}>
                <span className={style.author}>PR @ UJ</span>
                <h1 className={style.title}>
                  <Link to="/prLanding" >HUMANITIES</Link>
                </h1>
                <p className={style.textdes}>
                Get All The Latest WIE News From The Faculty of Humanities at the University of Johannesburg
                </p>
                <Link to="/prLanding" className={style.button}>
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
