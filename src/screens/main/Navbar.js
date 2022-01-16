import React from "react";
import logo from "../../assets/UJ_Primary.png";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import style from "./header.module.scss";

export default function Header() {
  //To make navbar responsive
  function navResponse() {
    var nav = document.getElementsById("nav");
    nav[0].classList.toggle("collapse");
  }

  return (
    <>
      <div className={style.nav} id="nav">
        <div className={style.navlogo}>
          <img src={logo} alt="Logo" height="80px" />
        </div>

        <div className={style.navitems}>
          <ul className={style.items}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className={style.menu}>
              <Link>Faculty</Link>

              <ul className={style.submenu}>
                <li>
                  <Link to={"/prBlog"}>Humanities</Link>
                </li>
                <li>
                  <Link to={"/social"}>Social Work</Link>
                </li>
                <li>
                  <Link to={"/lawBlog"}>Law</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Videos</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
        </div>
        <div className={style.togglecollapse} onClick={navResponse}>
          <div className={style.toggleicons}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </>
  );
}
