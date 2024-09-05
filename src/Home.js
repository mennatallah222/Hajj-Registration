import ContactUs from "./ContactUs";
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
import { Outlet } from "react-router-dom";


// Home.js
export default function Home() {


    const [cards, setCards]=useState([]);

    const [showSearch, setShowSearch]=useState(false);
    const [search, setSearch]=useState("");
    function handleClick(){
        setShowSearch(prev=>!prev);
    }

    function handleSearch(e){
        setSearch(e.target.value);
    }

    useEffect(()=>{
        if(search===""){
            axios.get('/cards')
            .then((data)=>setCards(data.data))
            .catch((error) => {
                console.error('Error fetching data:', error);});
        }
        else{
            axios.get(`/cards/search/${search}`)
            .then((data)=>setCards(data.data))
            .catch((err)=>{
                console.error(err);
            })
        }
        
    }, [search]);


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

            <div style={{
                position:"relative",
                left:"0%",
                top:"50%",
                width: "100%",
                height:"50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row-reverse",
                margin:"10px"           
            }}>

            
            <div style={{position: "absolute", right:"6%", display:"flex", justifyContent:"center", alignItems:"center", width:"40px", height:"40px", padding:"10px", borderRadius:"50%", backgroundColor:"#3e2a1b", color:"white", cursor:"pointer"}} onClick={handleClick}>
                <i className="fas fa-search"></i>
            </div>

            {
                showSearch&&(
                    <div>
                        <input type="text" value={search} onChange={handleSearch} style={{padding:"10px 20px", width:"400px", border:"none", backgroundColor:"#d6a059", borderRadius:"10px"}} placeholder="search..."></input>
                    </div>
                )
            }
            </div>

            <br/>
            {/* <p id="second-title">10 steps closer to 1445 Hajj</p> */}
            <div className="cards-container">
                {
                    cards.map((card, _id)=>(
                        <Card key={_id}  id={card._id}  img={`http://localhost:5000/uploads/${card.img}`} span={card.span} p={card.p} price={card.price}/>
                    ))
                }
                <Card  img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img2} span={"Special Package"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img3} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                <Card img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
                
            </div>
            <Outlet/>
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
        
    </div>;
}
