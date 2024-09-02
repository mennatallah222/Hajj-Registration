import React from "react";
import Slider from "react-slick";
import img1 from './Styles/imgs/01';
import img2 from './Styles/imgs/02.jpg';
import img3 from './Styles/imgs/03.jpg';

export default function ImageSlider() {
    const imgs = [
        img1,
        img2,
        img3,
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
        <div className="slider">
            <Slider {...settings}>
                {imgs.map((img, index) => (
                    <div key={index} className="slide-wrapper">
                        <img src={img} alt={`slide-${index}`} className="slider-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
