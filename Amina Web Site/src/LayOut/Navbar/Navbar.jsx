import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../Image/Amina-35.png'
import { navbarData } from '../../utils/NavbarData'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import RespNavbar from './RespNavbar/RespNavbar';
import { Link } from "react-router-dom";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false)

  function handleOpenNavbar() {
    setopenNavbar(!openNavbar)
  }

  return (
    <nav>

      <div className="upBox">
        <div className="menuBox" onClick={handleOpenNavbar}>
          <AiOutlineMenu />
        </div>
        <img src={Logo} alt="" />
      </div>
      <div className="downBox">
        <ul>
          {
            navbarData.map((item, index) => {
              return (
                <div key={index}>
                  <li><Link className='link' to={`${item.path}`}>{item.name}</Link>
                    <div className="subMenu">
                      {
                        item?.childData ? <> {item?.childData?.map((item, index) => {
                          return (
                            <div className='subMenuİnBox' key={index}>
                              <span className='span1'></span>
                              <Link to={`${item.path}`} className='link' >
                                <p className='text1' >{item.name}

                                  <div className='secondSubmenu'>
                                    {
                                      item?.thridData ?
                                        <>
                                          {item?.thridData?.map((item, index) => {
                                            return (
                                              <div className='secondSubMenuInBox' key={index}>
                                                <span className='span2'></span>
                                                <p className='text2' >{item.name}</p>
                                              </div>
                                            )
                                          })}
                                        </>
                                        : ""
                                    }
                                  </div>
                                </p>
                              </Link>
                            </div>
                          )
                        })}
                        </> : ""
                      }
                    </div>
                  </li>

                </div>
              )
            })
          }
        </ul>
      </div>
      <div className={`respNavbar ${openNavbar ? "open" : ""}`}>
        <div className="closeBox" onClick={handleOpenNavbar}>
          <IoMdClose />
        </div>
        <div className="respUpBox"><img src={Logo} alt="" /></div>
        <div className="respDownBox">
          <RespNavbar />
        </div>
      </div>

    </nav>
  )
}

export default Navbar