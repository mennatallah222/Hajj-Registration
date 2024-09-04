import axios from "./api/axios";
import {useState} from "react";
import Notification from './Notification';

export default function ContactUs(){

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [success, setSuccess]=useState("");

    async function handleSubmit(e){
        e.preventDefault();

        try {
            const response = await axios.post('/contact-us', {name, email, message}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log("Request was successful", response.data);
    
            if (response.status === 200) {
                setName("");
                setEmail("");
                setMessage("");
                setSuccess("Message sent successfully!");
                // window.location.pathname = "/";
            }
        } 
        catch (err) {
            console.error("Error occurred:", err);
            console.error("Response data:", err.response?.data?.message);
        }
    }

    return (
        <div id="contact-page">
            <div className="contact">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <i style={{fontSize:"24px"}}className="input-icon fa">&#xf007;</i>
                        <input type="text" placeholder="Your name" className="input-with-icon" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>

                    <div className="input-container">
                        <i style={{fontSize:"24px"}}className="input-icon fa">&#x2709;</i>
                        <input type="text" placeholder="Your email" className="input-with-icon" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    {/* <input placeholder="your email"></input> */}
                    <textarea placeholder="Enter a message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button className="contact-btn">Submit</button>
                </form>
            </div>
            
            {
               success&& <Notification content={success} onClose={()=>setSuccess(null)}/>
            }
        </div>

    )
}

/* <div> this is one</div>
        <div className="right-card">
            Sign up for free
            <input placeholder="your name"></input>
            <input placeholder="your email"></input>
            <button className="contact-btn">Submit</button>
        </div> */