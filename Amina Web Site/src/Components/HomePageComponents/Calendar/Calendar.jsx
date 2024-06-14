import React from 'react'
import './Calendar.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
function Calendar() {
    return (
        <section id='calendar'>
            <Swiper className="mySwiper"
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="leftBox">
                        <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" alt="" />
                    </div>
                    <div className="rightBox">
                        <div className="textBox">
                            <p>02.20.30</p>
                            <span>Burada bizim alimpiyada olcaq</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="leftBox">
                        <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" alt="" />
                    </div>
                    <div className="rightBox">
                        <div className="textBox">
                            <p>02.20.30</p>
                            <span>Burada bizim alimpiyada olcaq</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Calendar