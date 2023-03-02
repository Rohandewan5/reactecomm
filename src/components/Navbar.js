import React from "react";
import "./componets-css/Navbar.css";
import { Link } from "react-router-dom"
import { useState } from "react";


function Navbar() {
    var cross = "fa-solid fa-xmark";
    var bars = "fa-solid fa-bars";
    var [status, setstatus] = useState(true);
    var shownavbar = "show-navbar";
    var hidenavbar = "hide-navbar";

    const changeclass = () => {
        console.log("click");
        if (status === true) {
            setstatus(!status);
        }
        else if (status === false) {
            setstatus(!status);
        }
    }

    return (
        <div className="navbar-wrapper">
            <div className="left-navbar-wrapper">
                <div><i className="fa-solid fa-cart-shopping icon-navbar"></i>&nbsp;&nbsp;<b>Ecomm</b></div>
                <div className="change" onClick={changeclass}>
                    <i className={status ? cross : bars}></i>
                </div>
            </div>
            <div className={status ? "right-navbar-wrapper " + shownavbar : hidenavbar}>
                <div className="navbar-box"><Link style={{ "fontWeight": "800", "color": "#D2042D", "textDecoration": "none" }} to="/" >HOME</Link><br /></div>
                <div className="navbar-box"><Link style={{ "fontWeight": "800", "color": "#D2042D", "textDecoration": "none" }} to="/product" >PRODUCTS</Link><br /></div>
                <div className="navbar-box"><Link style={{ "fontWeight": "800", "color": "#D2042D", "textDecoration": "none" }} to="/contact" >CONTACT</Link><br /></div>
                <div className="navbar-box"><Link style={{ "fontWeight": "800", "color": "#D2042D", "textDecoration": "none" }} to="/cart" ><i className="fa-solid fa-cart-shopping icon-navbar"></i>:10</Link><br /></div>
            </div>
        </div>
    )
}

export default Navbar;