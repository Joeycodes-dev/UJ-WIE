import React from "react";
import Header from "../main/header";
import Footer from "../main/Footer";
import style from "./social.module.scss";
import post1 from "../../assets/back-min.PNG";
import { Link } from "react-router-dom";
import { VideoLabel } from "@material-ui/icons";
import ReactPlayer from "react-player";


function Social() {
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
                <Link to={"/social"} className={style.active}>Social Work</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/lawBlog"}>Law</Link>
              </li>
            </ul>
          </div>

          <div className={style.landingOne}>
            <div className={style.firstHeading}>
              <h2>Welcome to Social Work @ UJ</h2>
            </div>
            <p>
            The UJ Department of Social Work endorses the Global Definition of Social Work, which was approved by the IFSW General Meeting and the IASSW General Assembly in July 2014, viz.

            ​Social work is a practice-based profession and an academic discipline that promotes social change and development, social cohesion, and the empowerment and liberation of people. Principles of social justice, human rights, collective responsibility and respect for diversities are central to social work.  Underpinned by theories of social work, social sciences, humanities and indigenous knowledges, social work engages people and structures to address life challenges and enhance wellbeing.{" "}
            </p>
            <div className={style.video}>
              <div className={style.vidHeading}>
                <div className={style.vidIcon}>
                  <VideoLabel className={style.icon} />
                  <Link to={"/prBlog"}>
                    <h3>Social Work</h3>
                  </Link>
                </div>
                <p>
                This is a four-year qualification offered full-time at the Auckland Park Campus only.

                Students must register for specific courses withi​n the Faculty of Humanities with majors in Social Work (at 4th year level) and Psychology and Sociology (one up to 3rd year level), register for Internship whereby the student must attend Internship classes at the university as well as complete set number of hours of field instruction at approved welfare organisations in the social services sector each year.{" "}
                </p>
              </div>
              <div className={style.vidElement}>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=Zzn7F0QkXxs&origin=http://localhost:3000"
                  width="500px"
                  height="300px"
                  controls
                />
              </div>
            </div>

            <div className={style.video}>
            <div className={style.vidHeading}>
              <div className={style.vidIcon}>
                <VideoLabel className={style.icon} />
                <Link to={"/prBlog"}>
                  <h3>Teddy Bear Clinic</h3>
                </Link>
              </div>
              <p>
              The Teddy Bear Clinic for Abused Children (TTBC) originated in 1986 in response to an urgent need for medical examinations for sexually abused children. From there it has grown into a fully fledged service for abused children which includes: Forensic medical examinations, forensic assessments, counseling, psychological testing and more recently a diversion programme for youth sexual offenders.We historically have supported the abused child through the Criminal Justice System to ensure psychological healing takes place and the child is able to fulfill their place as a valuable member in society without the scarring that may perpetuate child abuse in the future. We have done this through forensic medical examinations, supportive therapy, forensic evaluations, psychological testing and a court preparation programme for children and parents, for cases that go to court.{" "}
              </p>
            </div>
            <div className={style.vidElement}>
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/7BjM7-txh9c&origin=http://localhost:3000"
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
              <a href="https://www.uj.ac.za/faculties/humanities/Department-of-Social-Work">
                Department of Social Work
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/Department-of-Social-Work/Pages/Journal.aspx">
                {" "}
                The Social Work Practitioner-Researcher{" "}
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/Department-of-Social-Work/Pages/News-and-Events.aspx">
                News and Events
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/Department-of-Social-Work/Pages/Vision-Mission-and-Commitment.aspx">
                {" "}
                Vision, Mission and Commitment
              </a>
            </li>
            <li className="upArrow">
              <a href="https://www.uj.ac.za/faculties/humanities/Department-of-Social-Work/Pages/Departmental-Partnerships.aspx">
                Departmental Partnerships
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Social;
