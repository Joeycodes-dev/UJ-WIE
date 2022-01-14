import React from 'react';
import logo from '../../assets/UJ_Primary.png';
import './style.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {

    //To make navbar responsive
    function navResponse(){
        var nav = document.getElementsByClassName("nav");
        nav[0].classList.toggle("collapse");
    }

    //LogOut

    function logOut(){
        localStorage.removeItem('currentUser')
        alert('You have logged out')
        return
    } 


    return (

        <nav className="nav sticky">
            <div className="nav-menu row">
                <div className="nav-brand">
                    <img src={logo}
                        alt="Logo"
                        height="90px"/>
                </div>
                <div className="toggle-collapse" onClick={navResponse}>
                    <div className="toggle-icons">
                        <MenuIcon/>
                    </div>
                </div>
                <div className="nav-items">
                    <ul>
                        <li className="nav-link">
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link>
                                Faculties
                            </Link>
                            <div className="sub-menu">
                                <ul>
                                <li><Link to={'/prBlog'}>Humanities</Link></li>
                                <li><Link to={'/social'}>Social Work</Link></li>
                                <li><Link to={'/lawBlog'}>Law</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-link about-us">
                            <Link to={'/video'}>
                                Videos
                            </Link>
                        </li>
                        {localStorage.getItem('currentUser') ? <li className="nav-link about-us">
                            <Link onClick={logOut} to={'/'}>
                                Logout
                            </Link>
                        </li> : <li className="nav-link about-us">
                        <Link to={'/login'}>
                            login
                        </Link>
                    </li> }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
