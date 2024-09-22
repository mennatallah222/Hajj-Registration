import { useState } from "react";
import axios from './api/axios';
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userProfile = await fetchProfile(codeResponse.access_token);
      await saveUserToDatabase(userProfile); // Save to your database
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const fetchProfile = async (accessToken) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
      setProfile(res.data);
      return res.data; // Return user profile
    } catch (err) {
      console.log(err);
    }
  };

  const saveUserToDatabase = async (userProfile) => {
    try {
      await axios.post('/users', {
        email: userProfile.email,
        name: userProfile.name,
        picture: userProfile.picture,
      });
    } 
    catch (err) {
      console.log("Error saving user data:", err);
    }
  };

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const Submit = async (e) => {
    e.preventDefault();
    setAccept(true);
    setErrorMsg("");
    setSuccessMsg(false);

    try {
      const response = await axios.post("user/login", { email, password }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setSuccessMsg(true);
      if (response.status === 200) {
        window.localStorage.setItem("auth-token", response.data.token);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("role", response.data.role);
        window.location.pathname = "/";
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrorMsg(err.response.data);
      } else {
        setErrorMsg("An error occurred");
      }
    }
  };

  return (
    <section className="sign-up">
      <form onSubmit={Submit}>
        <label htmlFor="email">Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email..."
        />

        <label htmlFor="password">Password </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password..."
        />
        {password.length < 8 && accept && <p className="error">Password must be more than 8 characters</p>}

        <button type="submit">Submit</button>

        {errorMsg && !successMsg && <p className="error">{errorMsg}</p>}
        {successMsg && !errorMsg && 
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <i className="info fa-solid fa-check" style={{borderRadius:"50%", border:"1px solid rgb(7, 183, 7)", padding:"5px"}}></i>
                <p className="info" style={{ margin: 0, marginBottom: -10 }}>Logged in successfully!</p>
            </div>
        }

        {/* Google Login Buttons */}
        {profile ? (
          <div>
            <img src={profile.picture} alt="user" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <p>Or Login Using</p>
            <button style={{ all: "unset", cursor: "pointer", backgroundColor:"brown", color:"white", padding:"10px", borderRadius:"50%", width:"15px", height:"15px", justifyContent:"center", display:"flex" }} onClick={() => login()}>
              <i className="fa-brands fa-google"></i>
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
