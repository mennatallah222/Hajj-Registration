export default function ContactUs(){
    return (
        <div id="contact-page">
            <div className="contact">
                <h3>Contact Us</h3>
                
                <div className="input-container">
                    <i style={{fontSize:"24px"}}className="input-icon fa">&#xf007;</i>
                    <input type="text" placeholder="Your name" className="input-with-icon" />
                </div>

                <div className="input-container">
                    <i style={{fontSize:"24px"}}className="input-icon fa">&#x2709;</i>
                    <input type="text" placeholder="Your email" className="input-with-icon" />
                </div>
                {/* <input placeholder="your email"></input> */}
                <textarea placeholder="Enter a message"/>
                <button className="contact-btn">Submit</button>

            </div>
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