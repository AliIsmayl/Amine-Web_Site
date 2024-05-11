import React from 'react'
import ContactWithUs from '../Components/ContactComponents/ContactWithUs'
import SendMeassage from '../Components/ContactComponents/SendMessage'
import NotMean from '../Components/NotMean/NotMean'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div id='contact'>
    <NotMean/>
      <ContactWithUs/>
      <SendMeassage/>
    </div>
  )
}

export default Contact
