import { useState } from "react";
import axios from './api/axios';

export default function SignUp() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [repeatPassword, setRepeatPassword] = useState("");
    const [data, setData]=useState({
        name:"",
        email:"",
        password:"",
        repeatPassword:""
    });

    const [accept, setAccept] = useState(false);
    const [flag, setFlag] = useState(true);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);


    async function Submit(e) {
        e.preventDefault();
        setAccept(true);
        setErrorMsg("");//to clear previous error messages
        setSuccessMsg(false);
    
        if (data.name === "" || data.password.length < 8 || data.repeatPassword !== data.password) {
            setFlag(false);//if data is not valid
        } else {
            setFlag(true);
        }
    
        if (flag) {
            try {
                const response = await axios.post('user/register', {name: data.name, email: data.email, password: data.password }, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                setSuccessMsg(true);
                console.log("Request was successful", response.data);

                if(response.status===200){
                    window.localStorage.setItem("email", data.email);
                    window.location.pathname="/";
                }
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
                    value={data.name}
                    onChange={e => setData({...data, name: e.target.value})}
                    type="text"
                    placeholder="Enter your name..."
                />
                {data.name === "" && accept && <p className={"error"}>Name is required</p>}
                {/* {name.length < 4 && accept && <p className={"error"}>Name length must be at least 3 characters long</p>} */}
                
                <label htmlFor="email">Email </label>
                <input
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}
                    type="email"
                    placeholder="Enter your email..."
                />
                
                <label htmlFor="password">Password </label>
                <input
                    value={data.password}
                    onChange={e => setData({...data, password: e.target.value})}
                    type="password"
                    placeholder="Enter password..."
                />
                {data.password.length < 8 && accept && <p className={"error"}>Password must be more than 8 characters</p>}

                <label htmlFor="repeat">Repeat password </label>
                <input
                    value={data.repeatPassword}
                    onChange={e => setData({...data, repeatPassword:e.target.value})}
                    type="password"
                />
                {data.repeatPassword !== data.password && accept && <p className={"error"}>Passwords must match</p>}
                
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
