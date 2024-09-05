import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function logOut() {
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("role");
        navigate("/login");
    }

    const [isNavOpen, setNav]=useState(false);

    return (
        <nav id="nav">
            <button id="nav-toggle" onClick={()=>setNav(!isNavOpen)}>☰</button>
            <div id="nav-div" className={isNavOpen?"show":""}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
            </div>

            <div className="inWebsite">
                {!window.localStorage.getItem("email") ? (
                    <>
                        <Link to={"/register"}>Register</Link>
                        <Link to={"/login"}>Login</Link>
                    </>
                ) : (
                    <>
                        <Link to={"/profile"} className="profileIcon">Profile</Link>
                        <Link to={"/"} onClick={logOut}>Log Out</Link>
                    </>
                )}
                {
                    window.localStorage.getItem("role")==="admin"?(
                        <>
                            <Link className="dashboard-btn" to={"/dashboard"}>Dashboard</Link>
                        </>
                    )
                    :
                    (
                        ""
                    )
                }
            </div>
        </nav>
    );
}

export default Header;
