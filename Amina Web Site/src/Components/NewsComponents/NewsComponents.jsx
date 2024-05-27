import React, { useEffect, useState } from 'react'
import './NewsComponents.scss'
import { MdKeyboardArrowRight } from "react-icons/md";
import NotMean from '../NotMean/NotMean';
import axios from 'axios'

function NewsCard() {
    const [NewsCart, setNewsCart] = useState([])
    async function GetNewsData() {
        const res = await axios.get("http://localhost:5000/xeberler")
        setNewsCart(res.data)
    }
    useEffect(() => {
        GetNewsData()
    }, [])

    return (
        <>
            <NotMean />
            <div className='newsPage'>
                {
                    NewsCart && NewsCart.map((item, index) => (
                        <div className="newsCard">
                            <div className="imageBox">
                                <img src={item.image} alt="" />
                                <div className="timeBox">
                                    <div className="timeBoxHover">
                                        <p>10 <span>MAR</span></p>

                                    </div>
                                </div>
                            </div>
                            <div className="textBox">
                                <div className="upText">
                                    <span></span>
                                    <p>Blog</p>
                                </div>
                                <h1>{item.title}</h1>
                                <h6>{item.content}</h6>
                                <h3>Read More <MdKeyboardArrowRight /></h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NewsCard