import React, { useEffect, useState } from 'react'
import "./index.scss"
import AboutCard from '../../../component/AboutCard'
import axios from 'axios'

const OurRehberlik = () => {
  const [data, setData] = useState([])

async function getData() {
  const res=await axios.get("http://localhost:5000/rehberlik")
  setData(res.data)
}
useEffect(() => {
  getData()
}, [])

  return (
    <div id='about-us'>
      <div className="tittle">
        <h3>Rəhbərlik</h3>
      </div>
      <div className="container">
        <div className="row">
        {
    data && data.map(item=>
      <div className='col-lg-3 col-md-4 col-12'>
<AboutCard {...item}/>
    </div>
    )
  }
        </div>
      </div>
    </div>


  )
}

export default OurRehberlik
