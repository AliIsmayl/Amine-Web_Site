import React, { useEffect, useState } from 'react'
import './NewsDetailPage.scss'
import { CgTime } from "react-icons/cg";
import { HiMiniUserCircle } from "react-icons/hi2";
import NotMean from '../../NotMean/NotMean';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

function NewsDetailPage() {
    const { name } = useParams()

    const [NewsDetail, setNewsDetail] = useState()

    async function getDetail() {
        const res = await axios.get(`http://localhost:5000/xeberler/${name}`)
        setNewsDetail(res.data)
        console.log(res.data);
    }
    useEffect(() => {
        getDetail()
    }, [name])

    return (
        <>


            <NotMean />
            {
                NewsDetail ?
                    <>

                        <div className='newsDetailPage'>
                            <div className="upBox">
                                <div className="imageBox">
                                    <img src={NewsDetail.image1} alt="" />
                                </div>
                                <div className="textBox">
                                    <div className="nothing">
                                        <span></span>
                                        <p>Blog</p>
                                    </div>
                                    <h1>{NewsDetail.title}</h1>
                                    <div className='littleInform'>
                                        <div className="littleBox">
                                            <CgTime />
                                            <p>March 27, 2024</p>
                                        </div>
                                        <div className="littleBox">
                                            <HiMiniUserCircle />
                                            <p>by Ali</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="downBox">
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image1' alt="" />
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image2' alt="" />
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image3' alt="" />
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image4' alt="" />
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image4' alt="" />
                                <img src="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg" className='image4' alt="" />
                            </div>
                        </div>
                    </>
                    : ""
}
        </>
    )
}

export default NewsDetailPage