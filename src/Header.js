import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({onNightToggle, night}) {
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
                <Link to={"/packages"}>Packages</Link>
                <Link to={"/journey"}>The Journey</Link>
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

                <div onClick={onNightToggle} className="night-btn" style={{cursor:"pointer", backgroundColor:"gray", width:"50px", padding:"10px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"50%", height:"50px"}}>
                    {
                        night?
                        <i className="fa-solid fa-moon"></i>
                        :
                        <i className="fa-solid fa-sun"></i>
                        
                    }
                </div>

            </div>
        </nav>
    );
}

export default Header;
