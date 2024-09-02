import React from "react";
import Slider from "react-slick";
import img1 from './Styles/imgs/a1.png';
import img2 from './Styles/imgs/a2.png';
import img3 from './Styles/imgs/a3.svg';
import img4 from './Styles/imgs/a4.png';
import img5 from './Styles/imgs/a5.png';
import img6 from './Styles/imgs/a6.png';


export default function AirlinesSlider(){
    const imgs = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <div className="airline-slider">
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div key={index} >
                        <img src={img} alt={`slide-${index}`} className="airline-slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}