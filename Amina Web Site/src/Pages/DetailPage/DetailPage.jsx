import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './DetailPage.scss'
import NotMean from '../../Components/NotMean/NotMean'
import parse from 'html-react-parser';

function DetailPage() {
    const { name } = useParams()
    const [detail, setDetail] = useState([])
    async function getDetail() {
        const res = await axios.get(`http://localhost:5000/idmanNovleri/${name}`)
        setDetail(res.data)
    }
    useEffect(() => {
        getDetail()
    }, [name])
    return (
       <>
        <NotMean/>
        <div className='detailPage'>
            <div className="upBox">{detail.tittle ? parse(detail.tittle) : detail.tittle}</div>
            <div className="downBox">{detail.content ? parse(detail.content) : detail.content}</div>
        </div>
       </>
    )
}

export default DetailPage