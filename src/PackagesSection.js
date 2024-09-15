import img1 from './Styles/imgs/01';
import img2 from './Styles/imgs/02.jpg';
import img3 from './Styles/imgs/03.jpg';
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from './api/axios';
import { Outlet } from "react-router-dom";


export default function PackagesSection(){

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


    return <>
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

        <div className="cards-container">
            {
                cards.map((card, _id)=>(
                    <Card key={_id}  id={card._id}  img={`http://localhost:5000/uploads/${card.img}`} span={card.span} p={card.p} price={card.price} includes={card.includes} excludes={card.excludes}/>
                ))
            }
            <Card  img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
            <Card img={img2} span={"Special Package"} p={"umrah 9 days"} price={"$1950/preson"}/>
            <Card img={img3} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
            <Card img={img1} span={"Best Seller"} p={"umrah 9 days"} price={"$1950/preson"}/>
            
        </div>
        <Outlet/>
    </>
}