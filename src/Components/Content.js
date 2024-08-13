import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export default function Content(props) {
    
    return <div className="content">
    <img src={props.image} alt="img"></img>


     <br/>
     <h2 style={{fontSize:"12px"}} >{props.title}</h2>

    
     {/* <h3>{props.details}</h3> */}
   
    <div className="pricenrate" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"0"}}>      
        <h4>{props.price} $</h4>
        <h4 style={{color:"#717171"}}>{props.rating} <i className="fa-solid fa-star" style={{color:"gold"}}></i></h4>          
     </div>
</div>
}


//const [heart, changeHeartState]=React.useState(true);
//     function Toggle(){
//         changeHeartState((v)=>!v);
//     }

//     return <div style={{flexWrap:"wrap"}} className={"content"}>

//         <div onClick={Toggle}>
//         <i className={heart ? "fa-regular fa-heart heart" : "fa-solid fa-heart heart"} style={{position:"relative", transform: "translate(16rem, 4rem)", fontSize:"30px", cursor:"pointer", color: heart?"white":"#ff0000"}} ></i>

//         </div>
//             <img src={props.img} alt="img"></img>


//         <br/>
//         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"0"}}>
        
//         <h2>{props.title}</h2>
//         <h4 style={{color:"#717171"}}>{props.rating} <i className="fa-solid fa-star" style={{color:"gold"}}></i></h4>
            
//         </div>
//         <h3>{props.details}</h3>
       
//         <h4>{props.price} $</h4>