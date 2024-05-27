import React, { useEffect, useState } from 'react'
import "./index.scss"
import AboutCard from '../../../component/AboutCard'
import axios from 'axios'
import NotMean from '../../NotMean/NotMean'

const Ourİdmaci = () => {

  const [data, setData] = useState([])

  async function getData() {
    const res = await axios.get("http://localhost:5000/idmanci")
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
<NotMean/>
      <div id='about-us'>
        <div className="tittle-icra">
          <h3>İdmaçılar</h3>
        </div>
        <div className="container">
          <div className="row">
            {
              data && data.map(item =>
                <div className='col-lg-3 col-md-4 col-12'>
                  <AboutCard style={"var"} {...item} />
                </div>
              )
            }


          </div>
        </div>
      </div>

    </>


  )
}

export default Ourİdmaci
