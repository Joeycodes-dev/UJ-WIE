import React from "react";
import Header from "../main/header";
import Footer from "../main/Footer";
import style from "./law.module.scss";
import post1 from "../../assets/back-min.PNG";
import moot from "../../assets/moot.jpg";
import lawbook from "../../assets/lawnews.jpg";
import buslaw from "../../assets/buslaw.jpg";
import { Link } from "react-router-dom";
import { VideoLabel } from "@material-ui/icons";
import ReactPlayer from "react-player";

function Home() {

  return (
    <>
      <Header />
      <div className={style.mainLaw}>
        <div className={style.lawHeader}>
          <img src={post1} alt="header" />
        </div>

        <div className={style.vidWrapper}>
          <div className={style.hoverlist}>
            <ul>
              <li className={style.upArrow}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/prLanding"}>Public Relations</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/social"}>Social Work</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/lawBlog"} className={style.active}>Law</Link>
              </li>
            </ul>
          </div>

          <div className={style.landingOne}>
            <div className={style.firstHeading}>
              <h2>Welcome to the Law @ UJ WIE</h2>
            </div>
            <div className={style.welcomeVid}>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/q3f6wkGTv1w&origin=http://localhost:3000"
                width="600px"
                height="300px"
                controls
              />
            </div>
            <p>
            The UJ Faculty of Law offers the traditional law programmes such as BA Law, BCom Law and LLB, as well as LLM degrees by dissertation and coursework and LLD degrees in various important fields. In addition to these degrees, the Faculty has a strong non-formal programmes division that offers postgraduate diplomas, certificates and short courses in specialised areas such as tax law, compliance, criminal justice and forensic investigation, insolvency law, labour law, corporate law and drafting of contracts.{" "}
            </p>

            <div className={style.firstHeading}>
              <h2>Introducing the UJ Law Clinic</h2>
            </div>
            <div className={style.welcomeVid}>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/M5R_cqdDe2Q&origin=http://localhost:3000"
                width="600px"
                height="300px"
                controls
              />
            </div>

            <p>
            The Law Clinic at the UJ formally opened its doors to the public in February 1981 with 18 students. The former Dean of the Faculty of Law, and member of the MEC of the University of Johannesburg, Professor Patrick O’ Brien, was one of those very first students who rendered free legal service to the community. The main aims of the Law Clinic developed with time and experience gained and eventually, in conjunction with the rendering of free legal services, the training of law students in a clinical environment dealing with live clients became one of its main points of focus. Over the years the Law Clinic also ventured into areas such as Hillbrow.{" "}
          </p>
          
            <div className={style.video}>
              <div className={style.vidHeading}>
                <div className={style.vidIcon}>
                  <VideoLabel className={style.icon} />
                  <a
                    href={
                      "https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3bjvo80%3Ffbclid%3DIwAR1MVPBDnuIq0YwNzppABbsomZs06kCnnsRznHHyfqXrM4KmLX3F7xko4TY&h=AT3NpO_SiVsHtEgGPJ9VZKXYh0VOMs874G_yPk9niWQroJhX9_Yu4gQ9Ir0C4Ba6QJnd-ekrForzCoJfpCqaCPsPqo-rbt55wKyP-ICSkJXZKs4L57yXBojvI-HfnPRpi1s0&__tn__=-UK-y-R&c[0]=AT3GjnmgO-GiFqV9e2uOeoZuIMJ3y_AqsH9TOKPPEO6AB-8lL3Q0MgeJ9EF8wPbkflcTotEW6qdLaunh2qPxgxpX1ntwa_fXkjKRhq4k5Qe8l1Uit_LEJMUWyZfrO_QvEDl13-neV5kDFTZ1JIw1-9BwIbPu7ncDkcfs5o2_16GwJeqP02iYJFCAYXXq8ElvXiXrVTB1Z-RpIjVW"
                    }
                  >
                    <h3>Short Learning Programme In Business Rescue</h3>
                  </a>
                </div>
                <p>
                  The Faculty of Law at the University of Johannesburg is now
                  offering its short learning programme in Business Rescue in a
                  fully online format. This will give you a convenient and
                  accelerated opportunity to update your knowledge on the legal
                  and practical principles and the latest developments in this
                  field. For more information on the course click here{" "}
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3bjvo80%3Ffbclid%3DIwAR1MVPBDnuIq0YwNzppABbsomZs06kCnnsRznHHyfqXrM4KmLX3F7xko4TY&h=AT3NpO_SiVsHtEgGPJ9VZKXYh0VOMs874G_yPk9niWQroJhX9_Yu4gQ9Ir0C4Ba6QJnd-ekrForzCoJfpCqaCPsPqo-rbt55wKyP-ICSkJXZKs4L57yXBojvI-HfnPRpi1s0&__tn__=-UK-y-R&c[0]=AT3GjnmgO-GiFqV9e2uOeoZuIMJ3y_AqsH9TOKPPEO6AB-8lL3Q0MgeJ9EF8wPbkflcTotEW6qdLaunh2qPxgxpX1ntwa_fXkjKRhq4k5Qe8l1Uit_LEJMUWyZfrO_QvEDl13-neV5kDFTZ1JIw1-9BwIbPu7ncDkcfs5o2_16GwJeqP02iYJFCAYXXq8ElvXiXrVTB1Z-RpIjVW">
                    bit.ly/3bjvo80
                  </a>
                </p>
              </div>
              <div className={style.vidElement}>
                <img src={buslaw} height="400px" width="300px" />
              </div>
            </div>

            <div className={style.video}>
              <div className={style.vidHeading}>
                <div className={style.vidIcon}>
                  <VideoLabel className={style.icon} />
                  <a
                    href={
                      "https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3mfTx4f%3Ffbclid%3DIwAR30eK7LCELZIsWH-KKCxcBqS2i-3iY9XbE3FpfFTs-zT6-_tu4RLv_xeYA&h=AT2cGFaN5MX1zTTiP-kV2hREJrxncAUTAnPLalrB_9KZcxnEl0_5KxFe8NpAGEy6idQAk3HTyua9o4MkmgBPOqGgNdKmph5lFiRMA1y7YKnTwtvWcpt5qPKe_A6cZKJFWKFD&__tn__=-UK*F&c[0]=AT2HKSWkBtIEPiPH-_AHGOnasUA7J-y95Gbj9AJKtrd4-OLG9lnzrljdUlhzLtinkqDZRf9ZlTJwFBRmT-WJGyhVrF9EAeoxCCOXvaFWHNyQnT93zkwOJFlCbcOdIhbZnFO3tiMYNzc_6VgT97dpjrhaBlHRSIcO9kABdIvjJB5Fzzs"
                    }
                  >
                    <h3>Dr Garth J Bouwer's Book</h3>
                  </a>
                </div>
                <p>
                  Join us for the launch of Dr Garth Bouwers’ book: Tacit Choice
                  of Law in International Commercial Contracts – A Global
                  Comparative Study. Friday 1 Oct. 2021, 14:00 - 15:30 Click
                  here to join via Teams :{" "}
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F3mfTx4f%3Ffbclid%3DIwAR30eK7LCELZIsWH-KKCxcBqS2i-3iY9XbE3FpfFTs-zT6-_tu4RLv_xeYA&h=AT2cGFaN5MX1zTTiP-kV2hREJrxncAUTAnPLalrB_9KZcxnEl0_5KxFe8NpAGEy6idQAk3HTyua9o4MkmgBPOqGgNdKmph5lFiRMA1y7YKnTwtvWcpt5qPKe_A6cZKJFWKFD&__tn__=-UK*F&c[0]=AT2HKSWkBtIEPiPH-_AHGOnasUA7J-y95Gbj9AJKtrd4-OLG9lnzrljdUlhzLtinkqDZRf9ZlTJwFBRmT-WJGyhVrF9EAeoxCCOXvaFWHNyQnT93zkwOJFlCbcOdIhbZnFO3tiMYNzc_6VgT97dpjrhaBlHRSIcO9kABdIvjJB5Fzzs">
                    bit.ly/3mfTx4f
                  </a>
                </p>
              </div>
              <div className={style.vidElement}>
                <img src={lawbook} height="300px" width="500px" />
              </div>
            </div>

            <div className={style.video}>
              <div className={style.vidHeading}>
                <div className={style.vidIcon}>
                  <VideoLabel className={style.icon} />
                  <a href={"https://www.facebook.com/LawUJ-208700859140832"}>
                    <h3>Law@UJ</h3>
                  </a>
                </div>
                <p>
                  Thinking of the UJ LAW MOOT COURT TEAM currently participating
                  in the African Human Rights Moot Court Competition hosted in
                  Stellenbosch! Good luck, go team UJ! University of
                  Johannesburg{" "}
                </p>
              </div>
              <div className={style.vidElement}>
                <img src={moot} height="300px" width="500px" />
              </div>
            </div>

            <div className={style.video}>
              <div className={style.vidHeading}>
                <div className={style.vidIcon}>
                  <VideoLabel className={style.icon} />
                  <Link to={"/prBlog"}>
                    <h3>Moot court</h3>
                  </Link>
                </div>
                <p>
                  Moot court is a co-curricular activity at many law schools.
                  Participants take part in simulated court or arbitration
                  proceedings, usually involving drafting memorials or memoranda
                  and participating in oral argument. In most countries, the
                  phrase "moot court" may be shortened to simply "moot" or
                  "mooting". Participants are either referred to as "mooters"
                  or, less conventionally, "mooties".{" "}
                </p>
              </div>
              <div className={style.vidElement}>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=e4tBsVYu5Lg&origin=http://localhost:3000"
                  width="500px"
                  height="300px"
                  controls
                />
              </div>
            </div>
          </div>
        </div>

        <div className="additional">
          <div className="blogInfo">
            <h2>Additional Links</h2>
          </div>
          <ul>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/law">Faculty of Law</a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/law/Pages/Research.aspx">
                {" "}
                Law Research
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/law/Law-Clinic">
                L​​​aw Clinic​
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/law/Pages/News-and-Events.aspx">
                News and Events
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/law/Pages/womens-month-career-junction.aspx">
                Women’s month Career Junction
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
