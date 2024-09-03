// import CircleSvg from "./CircleSvg"

export default function Card({img, span, p, price}){

 

    return <>
        <div className="card-container">
                    {/* <CircleSvg/>                     */}
            <div className="card">
                <img src={img} alt="package"></img>
                
                <div className="card-text">
                    <span>{span}</span>
                    <p>{p}</p>
                    <p id="price">{price}</p>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    </>
}