import React from "react"
import logo from  "../reactjs-icon.png";



export default function NavBar() {
    return (
        <nav className="nav_block">
            <img src={logo} alt="logo" className="logo"/>
            <h3 className="logoName">RactFacts</h3>
            <h4 className="nav_right_descrip">ReactCourse - </h4>
            <h5 className="right_right_describ_sub">Project 1</h5>
        </nav>
    )
}