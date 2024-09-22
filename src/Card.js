// import CircleSvg from "./CircleSvg"

import { Link } from "react-router-dom";

export default function Card({id, img, span, p, price}){

 

    return <>
        <div className="card-container">
                    {/* <CircleSvg/>                     */}
            <div className="card">
                <img src={`${img.replace(/\\/g, '/')}`} alt="package"></img>
                <i className="fa-solid fa-heart" style={{
                    backgroundColor: "black",
                    position: "absolute",
                    left: "0.5rem",
                    top: "0.5rem",
                    borderRadius: "50%",
                    padding: "10px",
                    textAlign: "center",
                    color: "white",
                    cursor: "pointer"
                }}/>
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