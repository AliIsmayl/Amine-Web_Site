import React from 'react'
import Inform from '../Components/HomePageComponents/InformComponents/Inform'
import Medal from '../Components/HomePageComponents/MedalComponents/Medal'
import Partner from '../Components/HomePageComponents/PartnerComponents/Partner'
import Header from '../Components/HomePageComponents/Header/Header'
import NotMean from '../Components/NotMean/NotMean'

function HomePage() {
  return (
    <>
    <NotMean/>
      <Header />
      <Inform />
      <Medal />
      <Partner />
    </>
  )
}

export default HomePage