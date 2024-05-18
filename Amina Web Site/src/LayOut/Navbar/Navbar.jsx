import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import Logo from '../../Image/Amina-35.png'
import { navbarData } from '../../utils/NavbarData'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import RespNavbar from './RespNavbar/RespNavbar';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false)
  const [hiddenNavbar, sethiddenNavbar] = useState(true)

  function handleOpenNavbar() {
    setopenNavbar(!openNavbar)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        sethiddenNavbar(false);
      } else {
        sethiddenNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      {
        hiddenNavbar && <div className="upBox">
          <div className="menuBox" onClick={handleOpenNavbar}>
            <AiOutlineMenu />
          </div>
          <img src={Logo} alt="" />
        </div>
      }

      <div className="downBox">
        <ul>
          <div>
            <li className='pageText'><NavLink className='link' to={"/"}><span></span> Ana Səhifə</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/about"}><span></span> Haqqımızda</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/asdsa"}><span></span> Milli komandalar</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/asdsa"}><span></span> İdman növləri</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/asdsad"}><span></span> Xəbər</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/asd"}><span></span> Media</NavLink></li>
          </div>
          <div>
            <li className='pageText'><NavLink className='link' to={"/contact"}><span></span> Əlaqə</NavLink></li>
          </div>
          {/* {
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
          } */}
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