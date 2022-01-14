import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import style from  "./Footer.module.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        SInovalo Winnings
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div className={style.footer}>

        <div className={style.row}>
          <div className={style.footerCol}>
            <h4>navigation</h4>
            <ul>
              <li>
                <a href="https://ujwilrock.web.app/">Home</a>
              </li>
              <li>
                <a href="https://ujwilrock.lovestoblog.com/programme.html">Group projects</a>
              </li>
            </ul>
          </div>
          <div className={style.footerCol}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="https://www.uj.ac.za/studyatUJ/sec/Pages/Frequently-Asked-Questions.aspx">FAQs</a>
              </li>
              <li>
                <a href="https://ujwilrock.lovestoblog.com/AIS.html">Department of Applied Information Systems</a>
              </li>
              <li>
                <a href="https://ujwilrock.lovestoblog.com/Marketing.php">Department of Marketing</a>
              </li>
              <li>
                <a href="https://ujwilrock.lovestoblog.com/Information.html">
                  Department of Information and Knowledge Management
                </a>
              </li>
              <li>
                <a href="https://ujwilrock.web.app/prLanding">Faculty of Humanities</a>
              </li>
              <li>
                <a href="https://ujwilrock.web.app/lawBlog">Faculty of Law</a>
              </li>
            </ul>
          </div>
          <div className={style.footerCol}>
            <h4>contact</h4>
            <ul>
              <li>
                <a href="javascript:void()">Tel: +27 11 559 4555</a>
              </li>
              <li>
                <a href="mailto:mylife@uj.ac.za">emaiil: mylife@uj.ac.za</a>
              </li>
            </ul>
          </div>
          <div className={style.footerCol}>
            <h4>follow us</h4>
            <div className={style.socialLinks}>
              <a href="https://www.facebook.com/go2uj">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/go2uj">
                <TwitterIcon />
              </a>
              <a href="https://www.linkedin.com/school/university-of-johannesburg/">
                <LinkedInIcon />
              </a>
              <a href="https://www.youtube.com/user/filmdivision1">
                <YouTubeIcon />
              </a>
              <a href="https://www.instagram.com/university_of_johannesburg/">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <Copyright />

    </div>
  );
}
