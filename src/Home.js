import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Button from "./Button"
import img1 from './Styles/imgs/01';
import img2 from './Styles/imgs/02.jpg';
import img3 from './Styles/imgs/03.jpg';
import Card from "./Card";
import ImageSlider from "./ImageSlider";
import AirlinesSlider from "./AirlinesSlider";
import ServicesCard from "./ServicesCard";
import { useEffect, useState } from "react";
import axios from './api/axios';


// Home.js
export default function Home() {


    const [cards, setCards]=useState([]);

    useEffect(()=>{
        axios.get('/cards')
         .then((data)=>setCards(data.data))
         .catch((error) => {
            console.error('Error fetching data:', error);});
    }, []);


    return <div style={{display:"flex", justifyContent:"center", flexDirection: "column",
        alignItems: "center"}}>

        <div className="first-page">
            <div id="first-line">
                <h3>It's time to travel</h3>
                <Button content="Book Now" />

            </div>
            <h1>We have you covered</h1>
            <h4>full service travel agency, contact us for all your travel needs</h4>
            <div className="home-btns">
                <button>Explore</button>
                <Button content="Let's plan" />
            </div>
        </div>

        <section id="second-page">
            <br/>
            {/* <p id="second-title">10 steps closer to 1445 Hajj</p> */}
            <div className="cards-container">
                {
                    cards.map((card, index)=>(
                        <Card key={index} img={card.img} span={card.span} p={card.p} price={card.price}/>
                    ))
                }
                <Card img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img2} span={"Special Package"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img3} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                
            </div>
            
        </section>



        {/* ***********************************8 */}


        <section>
            <ImageSlider/>
            

            <AirlinesSlider/>
            <h4 style={{textAlign:"center", fontSize:"50px"}}>We provide you</h4>
        </section>

        <section className="services">
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>

        </section>

        <section id="contact-section">
            <ContactUs/>
        </section>
        
        <Footer/>
    </div>;
}
