import React from 'react'
import './NewsDetailPage.scss'
import { CgTime } from "react-icons/cg";
import { HiMiniUserCircle } from "react-icons/hi2";
import NotMean from '../../NotMean/NotMean';

function NewsDetailPage() {
    return (
        <>
        <NotMean/>
            <div className='newsDetailPage'>
                <div className="upBox">
                    <div className="imageBox">
                        <img src="https://metbuat.az/images/metbuat/images_o/1423892.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <div className="nothing">
                            <span></span>
                            <p>Blog</p>
                        </div>
                        <h1>Mas-reslinq idman növü üzrə ölkə birinciliyi və çempionatı keçirildi</h1>
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
            </div>
        </>
    )
}

export default NewsDetailPage