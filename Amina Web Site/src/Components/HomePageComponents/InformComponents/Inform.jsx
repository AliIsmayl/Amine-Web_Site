import React from 'react'
import './Inform.scss'
import photo from '../../../Image/cudo-7-380x280.jpg'
function Inform() {
  return (
    <section id='informComponent'>
        <div className="informCardBox">
            <div className="imageBox"> <img src={photo} alt="" /></div>
            <div className="textBox">
                <p>27-28 yanvar tarixində Qazaq güləşi idman növü uzrə Azerbaycan yığma komandasının üzvləri</p>
                <div className="line"></div>
                <button>Daha Ətraflı</button>
            </div>
        </div>
        <div className="informCardBox">
            <div className="imageBox"> <img src={photo} alt="" /></div>
            <div className="textBox">
                <p>27-28 yanvar tarixində Qazaq güləşi idman növü uzrə Azerbaycan yığma komandasının üzvləri</p>
                <div className="line"></div>
                <button>Daha Ətraflı</button>
            </div>
        </div>
        <div className="informCardBox">
            <div className="imageBox"> <img src={photo} alt="" /></div>
            <div className="textBox">
                <p>27-28 yanvar tarixində Qazaq güləşi idman növü uzrə Azerbaycan yığma komandasının üzvləri</p>
                <div className="line"></div>
                <button>Daha Ətraflı</button>
            </div>
        </div>
        <div className="informCardBox">
            <div className="imageBox"> <img src={photo} alt="" /></div>
            <div className="textBox">
                <p>27-28 yanvar tarixində Qazaq güləşi idman növü uzrə Azerbaycan yığma komandasının üzvləri</p>
                <div className="line"></div>
                <button>Daha Ətraflı</button>
            </div>
        </div>
    </section>
  )
}

export default Inform