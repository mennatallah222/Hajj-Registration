import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    function logOut() {
        window.localStorage.removeItem("email");
        navigate("/login");
    }

    return (
        <nav style={{ display: "grid", flexWrap: "wrap", alignItems: "center", gridTemplateColumns: "repeat(3, auto)", justifyContent: "space-between", margin: "0 30px", padding: "20px" }}>
            <div style={{ gridColumn: "2", display: "flex", justifyContent: "space-between", alignContent: "center", gap: "20px" }}>
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
            </div>
        </nav>
    );
}

export default Header;
