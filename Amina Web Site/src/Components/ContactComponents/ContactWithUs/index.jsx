import React from "react";
import "./index.scss";
import { PiMapPinAreaLight } from "react-icons/pi";
import { PiPhoneCallLight } from "react-icons/pi";  
import { GiMailbox } from "react-icons/gi";

const ContactWithUs = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="row-contact">
            <div className="cont">
              <h3>
                <span>Bizimlə</span> əlaqə
              </h3>
            </div>
          
            <div className="address">
              <div className="addr">
                <div className="image">
                  <PiMapPinAreaLight />
                </div>
                <div className="content">
                  <h3>Ünvanımız</h3>
                  <p>AZ 1004, A.Abbaszadə 2-ci Y/massiv, 194</p>
                </div>
              </div>
              <div className="addr">
                <div className="image">
                <PiPhoneCallLight />
                </div>
                <div className="content">
                  <h3>Tel:</h3>
                  <p>(+994 12) 564 08 09 </p>
                  <p>(+994) 50 310 50 19</p>
                </div>
              </div>
              <div className="addr">
                <div className="image">
                <GiMailbox />
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <p>info@amina-azif.az </p><p>
office@amina-azif.az</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithUs;
