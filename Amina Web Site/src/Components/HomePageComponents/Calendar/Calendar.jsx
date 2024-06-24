import React from 'react'
import './Calendar.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
function Calendar() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <section id='calendar'>
            <Swiper className="mySwiper"
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={pagination}
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