import React from 'react'
import './Header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Header() {
    return (
        <header>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="swiperBox">
                        <div className="leftBox">
                            <p>Avropa çempionatında Qazaq güləşi idman növu üzrə Azerbaycan yığma komandasının üzvləri</p>
                            <button>Daha Ətraflı</button>
                        </div>
                        <div className="rightBox">
                            <img src="https://amina-azif.az/wp-content/uploads/2024/01/Screenshot_12.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperBox">
                        <div className="leftBox">
                            <p>Avropa çempionatında Qazaq güləşi idman növu üzrə Azerbaycan yığma komandasının üzvləri</p>
                            <button>Daha Ətraflı</button>
                        </div>
                        <div className="rightBox">
                            <img src="https://amina-azif.az/wp-content/uploads/2024/01/Screenshot_12.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperBox">
                        <div className="leftBox">
                            <p>Avropa çempionatında Qazaq güləşi idman növu üzrə Azerbaycan yığma komandasının üzvləri</p>
                            <button>Daha Ətraflı</button>
                        </div>
                        <div className="rightBox">
                            <img src="https://amina-azif.az/wp-content/uploads/2024/01/Screenshot_12.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperBox">
                        <div className="leftBox">
                            <p>Avropa çempionatında Qazaq güləşi idman növu üzrə Azerbaycan yığma komandasının üzvləri</p>
                            <button>Daha Ətraflı</button>
                        </div>
                        <div className="rightBox">
                            <img src="https://amina-azif.az/wp-content/uploads/2024/01/Screenshot_12.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </header>
    )
}

export default Header