import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../Styles/imgs/02.jpg';
import img2 from '../Styles/imgs/03.jpg';
import img3 from '../Styles/imgs/02.jpg';

export default function SwiperComponent() {
    return (
        <div style={{display:"flex", position:"relative"}}>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
                

                <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    );
}
