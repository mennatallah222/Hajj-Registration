import ContactUs from "./ContactUs";
import Button from "./Button"
import ImageSlider from "./ImageSlider";
import AirlinesSlider from "./AirlinesSlider";
import ServicesCard from "./ServicesCard";
import PackagesSection from "./PackagesSection";
// import SwiperComponent from "./Components/SwiperComponent";


// Home.js
export default function Home() {

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

        <section >
            <PackagesSection/>
        </section>


        <section>
            <ImageSlider/>
            
            <h4 style={{textAlign:"center", fontSize:"50px"}}>Our Airlines</h4>

            <AirlinesSlider/>
            <h4 style={{textAlign:"center", fontSize:"50px"}}>We provide you</h4>
        </section>

        <section className="services">
            {/* <SwiperComponent/> */}
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
