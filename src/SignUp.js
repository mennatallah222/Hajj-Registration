import { useState } from "react";
import axios from './api/axios';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [flag, setFlag] = useState(true);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);


    async function Submit(e) {
        e.preventDefault();
        setAccept(true);
        setErrorMsg("");//to clear previous error messages
        setSuccessMsg(false);
    
        if (name === "" || password.length < 8 || repeatPassword !== password) {
            setFlag(false);//if data is not valid
        } else {
            setFlag(true);
        }
    
        if (flag) {
            try {
                const response = await axios.post('/register', { name, email, password }, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                setSuccessMsg(true);
                console.log("Request was successful", response.data);
            } catch (err) {
                if (err.response && err.response.data) {
                    setErrorMsg(err.response.data);
                    console.error("Error occurred while making the request", err.response.data);
                } else {
                    console.error("Error occurred while making the request", err.message);
                }
            }
        }
    }
    

    return (
        <section className={"sign-up"}>
            <form onSubmit={Submit}>
                <label htmlFor="name">Name </label>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your name..."
                />
                {name === "" && accept && <p className={"error"}>Name is required</p>}
                {/* {name.length < 4 && accept && <p className={"error"}>Name length must be at least 3 characters long</p>} */}
                
                <label htmlFor="email">Email </label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email..."
                />
                
                <label htmlFor="password">Password </label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter password..."
                />
                {password.length < 8 && accept && <p className={"error"}>Password must be more than 8 characters</p>}

                <label htmlFor="repeat">Repeat password </label>
                <input
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    type="password"
                />
                {repeatPassword !== password && accept && <p className={"error"}>Passwords must match</p>}
                
                <button type="submit">Submit</button>

                {/* displaying the errors coming from the server */}
                {errorMsg &&!successMsg ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <i className="error fa-solid fa-circle-exclamation"></i>
                        <p className="error" style={{ margin: 0 }}>{errorMsg}</p>
                    </div>
                ) : successMsg && !errorMsg? (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                        <i className="info fa-solid fa-check" style={{borderRadius:"50%", border:"1px solid rgb(7, 183, 7)", padding:"5px"}}></i>
                        <p className="info" style={{ margin: 0, marginBottom: -10 }}>Signed up successfully!</p>
                    </div>
                ) : null}
                
                

                
            </form>
        </section>
    );
};
