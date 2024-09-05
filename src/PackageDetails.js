import axios from "./api/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PackageDetails(){
    const {id}=useParams();

    const[card, setCard]=useState(null);

    useEffect(()=>{
        axios.get(`/cards/${id}`)
            .then((data)=>{
                console.log(data.data);

                setCard(data.data);
            })
            .catch((err)=>{
                console.log(err);
                setCard(null);
            });
    }, [id]);
    
    return <div className="details-page">
        
            {card===null?
                (
                <div id="error-page">
                    ERROR 404!
                </div>
                )
            
            :
            (
                <div key={card._id} id="card-pkg">
                    <img 
                        src={`http://localhost:5000/uploads/${card.img}`.replace(/\\/g, '/')} 
                        alt="package"
                        className="package-details-img"
                    />
                    <div className="card-text">
                        <h1>{card.p}</h1>
                        <h3 id="price">{card.price}$</h3>
                    </div>
                </div>
            )};
        
        </div>
}