import React from 'react'
import "./index.scss"
import AboutCard from '../../../component/AboutCard'

const OurCommitet = () => {
  return (
    <div id='about-us'>
<div className="tittle-icra">
  <h3>ICRAİYYƏ KOMİTƏSİ</h3>
</div>
<div className="container">
<div className="row">
    <div className='col-lg-3 col-md-4 col-12'>
<AboutCard/>
    </div>
    <div className='col-lg-3 col-md-4 col-12'>
<AboutCard/>
    </div>
    <div className='col-lg-3 col-md-4 col-12'>
<AboutCard/>
    </div>
    <div className='col-lg-3 col-md-4 col-12'>
<AboutCard/>
    </div>
</div>
</div>
</div>

    
  )
}

export default OurCommitet
