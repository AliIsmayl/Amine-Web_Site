import React, { useState } from 'react'
import './Navbar.scss'
import Logo from '../../Image/Amina-35.png'
import { navbarData } from '../../utils/NavbarData'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

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
                  <li>{item.name}
                    <div className="subMenu">
                      {
                        item?.childData ? <> {item?.childData?.map((item, index) => {
                          return (
                            <div className='subMenuİnBox' key={index}>
                              <span className='span1'></span>
                              <p className='text1'>{item.name}

                                <div className='secondSubmenu'>
                                  {
                                    item?.thridData ?
                                      <>
                                        {item?.thridData?.map((item, index) => {
                                          return (
                                            <div className='secondSubMenuInBox'>
                                              <span className='span2'></span>
                                              <p className='text2' key={index}>{item.name}</p>
                                            </div>
                                          )
                                        })}
                                      </>
                                      : ""
                                  }
                                </div>
                              </p>
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

          {/* <li>Ana Səhifə</li>
          <li>Haqqımızda</li>
          <li>Milli komandalar</li>
          <li>İdman növləri</li>
          <li>Xəbər</li>
          <li>Media</li>
          <li>Əlaqə</li> */}
        </ul>
      </div>
      <div className={`respNavbar ${openNavbar ? "open" : ""}`}>
        <div className="closeBox" onClick={handleOpenNavbar}>
          <IoMdClose />
        </div>
        <div className="respUpBox"><img src={Logo} alt="" /></div>
      <div className="respDownBox">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar