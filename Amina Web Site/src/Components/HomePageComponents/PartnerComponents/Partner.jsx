import React from 'react'
import './Partner.scss'

function Partner() {
    return (
        <section id='partnerComponent'>
            <div className="upBox">
                <div className="partnerBox">
                    <div className="imgBox">
                        <img src="https://amina-azif.az/wp-content/uploads/2023/07/ie.png" alt="" />
                    </div>
                    <div className="text">
                        <p>Ilham Əliyev</p>
                        <span>Azerbaycan Respublikasının Prezidenti</span>
                    </div>
                </div>
                <div className="partner2Box">
                    <p>Heydər Əliyev fondu</p>
                    <img src="https://amina-azif.az/wp-content/uploads/2023/07/he.png" alt="" />
                </div>
                <div className="partnerBox">
                    <div className="imgBox">
                        <img className='fondImage' src="https://amina-azif.az/wp-content/uploads/2023/07/me-adf.png" alt="" />
                    </div>
                    <div className="text">
                        <p>Mehriban Əliyeva</p>
                        <span>Azerbaycan Respublikasının Birinci vitse-prezidenti</span>
                    </div>
                </div>
            </div>
            <div className="middleBox"><p>Tərəfdaşlarımız</p></div>
            <div className="downBox">
                <div className="partnerBox"> 
                <img src="https://amina-azif.az/wp-content/uploads/2023/07/featured_channel.png" alt="" />
                </div>
                <div className="partnerBox"> 
                <img src="https://idmantv.az/storage/news/2022/aprel/5/mok.png" alt="" />
                </div>
                <div className="partnerBox"> 
                <img src="https://amina-azif.az/wp-content/uploads/2023/07/Logo_United_World_Wrestling.svg_-3.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Partner