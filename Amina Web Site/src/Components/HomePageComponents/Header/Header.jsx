import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Header() {
    const [NewsCart, setNewsCart] = useState([])
    async function GetNewsData() {
        const res = await axios.get("http://localhost:5000/xeberler")
        setNewsCart(res.data)
    }
    useEffect(() => {
        GetNewsData()
    }, [])
    return (
        <header>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                {
                    NewsCart && NewsCart.map((item, index) => (
                        <SwiperSlide>
                            <div className="swiperBox" key={index}>
                                <div className="leftBox">
                                    <p>{item.title}</p>
                                    <Link to={`news/${item.name}`}>
                                        <button>Daha Ətraflı</button>
                                    </Link>
                                </div>
                                <div className="rightBox">
                                    <img src={item.image1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </header>
    )
}

export default Header