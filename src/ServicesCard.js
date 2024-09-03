import { useState } from "react"

export default function ServicesCard(){

    const [position, setPosition]=useState({x:'0%', y:'0%'})

    const handleMouseMove=(e)=>{
        const rect=e.target.getBoundingClientRect();
        const x=e.clientX-rect.left;//x coordinate relative to the element
        const y=e.clientY-rect.top;//x coordinate relative to the element
        setPosition({x: `${x}px`, y:`${y}px`})
    }

    const handleMouseLeave=(e)=>{
        setPosition({x:'0%', y:'0%'})
    }

    return(
        <div className="service-container">
            <div className="blob-circle">
                <i>icon</i>
            </div>
            <div className="service" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{'--pos-x':position.x, '--pos-y':position.y}}>
                <div className="service-text">
                    <h1 className="service-title">service-title</h1>
                    <h3 className="sub-service-text">sub</h3>
                </div>
            </div>
        </div>
    )
}