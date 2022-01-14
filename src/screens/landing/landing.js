import React, { useState } from "react";
import Header from "../main/header";
import Footer from "../main/Footer";
import style from "./landing.module.scss";
import { Link } from "react-router-dom";
import { VideoLabel } from "@material-ui/icons";
import ReactPlayer from "react-player";
import prisa from "../../assets/prisa.png";
import brandsa from "../../assets/brandsa.png";
import uj from "../../assets/UJ_Primary.png";
import playPart from "../../assets/playPart.png";
import post1 from "../../assets/back.PNG";

export default function Landing() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.mainHeader}>
          {
            //<CarouselApp />
          }
          <img src={post1} alt="header" />
        </div>
        <div className={style.mainContent}>
          <div className={style.hoverlist}>
            <ul>
              <li className={style.upArrow}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/prLanding"} className={style.active}>Public Relations</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/social"}>Social Work</Link>
              </li>
              <li className={style.upArrow}>
                <Link to={"/lawBlog"}>Law</Link>
              </li>
            </ul>
          </div>

          <div className={style.landingContent}>
            <div className={style.landingOne}>
              <div className={style.firstHeading}>
                <h2>Strategic Communications</h2>
              </div>
              <div className={style.welcomeVid}>
                <ReactPlayer
                  className="react-player"
                  url="https://youtu.be/n6BGEM_FIMU&origin=http://localhost:3000"
                  width="600px"
                  height="300px"
                  controls
                />
              </div>
              <p>
                Recognising that tomorrow's stakeholder will be increasingly
                digital, virtual and fickle, the Department of Strategic
                Communication offers some of the most popular qualifications to
                prepare graduates for a rapidly-changing future. Here, young
                minds are shaped to become future brand managers, social media
                strategists, data analysts, online advertising planners, digital
                marketing managers, advertising and public relations executives
                who are cognisant of the unique challenges and responsibilities
                facing South Africa, the continent and the globe more so in the
                complex demands of an emerging post-work economy.{" "}
              </p>
              <div className={style.video}>
                <div className={style.vidHeading}>
                  <div className={style.vidIcon}>
                    <VideoLabel className={style.icon} />
                    <Link to={"/prBlog"}>
                      <h3>Stories of hope</h3>
                    </Link>
                  </div>
                  <p>
                    Play Your Part is a nationwide movement created to inspire,
                    empower and celebrate active citizenship in South Africa.
                    Its objective is to lift the spirit of our nation by
                    inspiring all South Africans to contribute to positive
                    change, become involved and start doing – because a nation
                    of people who care deeply for one another and the
                    environment in which they live is good for everyone. The
                    campaign is driven by the Brand South Africa.{" "}
                  </p>
                </div>
                <div className={style.vidElement}>
                  <img src={playPart} alt="storytelling" className={style.reactPLayer} width="600px" height="300px"/>
                </div>
              </div>

              <div className={style.video}>
                <div className={style.vidHeading}>
                  <div className={style.vidIcon}>
                    <VideoLabel className={style.icon} />
                    <Link to={"/prBlog"}>
                      <h3>Public Relations</h3>
                    </Link>
                  </div>
                  <p>
                    The Department of Strategic Communication is unique in its
                    multi-disciplinary and inter-disciplinary approach to the
                    rapid evolving communication technologies, media and
                    platforms available to collaborate with converged audiences
                    and channels. In this sense, it is the only academic
                    department of its kind locally, founded in the post-modern
                    approach to communication, called Strategic Communication.
                    Graduates therefore benefit from a holistic approach to
                    brand management while simultaneously benefitting from an
                    omni-channel.{" "}
                  </p>
                </div>
                <div className={style.vidElement}>
                  <ReactPlayer
                    className={style.reactPLayer}
                    url="https://www.youtube.com/watch?v=yloVOW6_Irs&origin=http://localhost:3000"
                    width="500px"
                    height="300px"
                    controls
                  />
                </div>
              </div>
            </div>

            <div className={style.landingOne}>
              <div className={style.firstHeading}>
                <h2>Social Work</h2>
              </div>
              <p>
              The UJ Department of Social Work endorses the Global Definition of Social Work, which was approved by the IFSW General Meeting and the IASSW General Assembly in July 2014, viz.

              ​Social work is a practice-based profession and an academic discipline that promotes social change and development, social cohesion, and the empowerment and liberation of people. Principles of social justice, human rights, collective responsibility and respect for diversities are central to social work.  Underpinned by theories of social work, social sciences, humanities and indigenous knowledges, social work engages people and structures to address life challenges and enhance wellbeing.{" "}
              </p>

              <div className={style.video}>
                <div className={style.vidHeading}>
                  <div className={style.vidIcon}>
                    <VideoLabel className={style.icon} />
                    <Link to={"/social"}>
                      <h3>Teddy Bear Clinic</h3>
                    </Link>
                  </div>
                  <p>
                  The Teddy Bear Clinic for Abused Children (TTBC) originated in 1986 in response to an urgent need for medical examinations for sexually abused children. From there it has grown into a fully fledged service for abused children which includes: Forensic medical examinations, forensic assessments, counseling, psychological testing and more recently a diversion programme for youth sexual offenders.We historically have supported the abused child through the Criminal Justice System to ensure psychological healing takes place and the child is able to fulfill their place as a valuable member in society without the scarring that may perpetuate child abuse in the future. We have done this through forensic medical examinations, supportive therapy, forensic evaluations, psychological testing and a court preparation programme for children and parents, for cases that go to court.{" "}
                  </p>
                </div>
                <div className={style.vidElement}>
                  <ReactPlayer
                    className={style.reactPLayer}
                    url="https://www.youtube.com/watch?v=Zzn7F0QkXxs&origin=http://localhost:3000"
                    width="500px"
                    height="300px"
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.moreinfo}>
          <h2>In partnership with</h2>
          <div className={style.sponsors}>
            <a href="https://www.prisa.co.za/">
              <img src={prisa} className={style.img2} />
            </a>
            <a href="https://www.uj.ac.za/">
              <img src={uj} />
            </a>
            <a href="https://www.brandsouthafrica.com/">
              <img src={brandsa} className={style.img} />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
