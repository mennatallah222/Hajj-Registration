// import CircleSvg from "./CircleSvg"

import { Link } from "react-router-dom";

export default function Card({id, img, span, p, price}){

 

    return <>
        <div className="card-container">
                    {/* <CircleSvg/>                     */}
            <div className="card">
                <img src={`${img.replace(/\\/g, '/')}`} alt="package"></img>
                
                <div className="card-text">
                    <span>{span}</span>
                    <p>{p}</p>
                    <p id="price">{price}$</p>

                    <Link to={`/packages/${id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}