import React, { useState } from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { TbUsers } from "react-icons/tb";
import { IoSparklesOutline } from "react-icons/io5";
import { MdInsertEmoticon } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineSpa } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { IoLogoReddit } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { TbBrandBooking } from "react-icons/tb";
import { PiGithubLogoDuotone } from "react-icons/pi";
const NavAdmin = () => {

  

  return (
    <div id='nav-admin' className="darkMode">
         
<div className="navigation">
<ul>
    
<li>
    </li>
    <li>
        <NavLink to="/admin/idmanNovleri"><TbUsers />Idman Novleri</NavLink>
    </li>
    <li>
        <NavLink to="/admin/idmancilar"><TbUsers />Idmançılar</NavLink>
    </li>
    <li>
        <NavLink to="/admin/hakim"><MdOutlineSpa />Hakimlər</NavLink>
    </li>
    <li>
        <NavLink to="/admin/komitet"><IoSparklesOutline />İcraiyyə Komiteti</NavLink>
    </li>
    <li>
        <NavLink to="/admin/rehberlik"><MdInsertEmoticon />Rəhbərlik</NavLink>
    </li>
    <li>
        <NavLink to="/admin/mesqci"><IoLogoReddit />Məşqçilər</NavLink>
    </li>
    <li>
        <NavLink to="/admin/xeberler"><TfiGallery />Xəbərlər</NavLink>
    </li>
   
    <li>
        <NavLink to="/admin/video"><MdOutlineBookmarkAdded />Video</NavLink>
    </li>
    <li>
        <NavLink to="/admin/foto"><BsPatchQuestion />Şəkillər</NavLink>
    </li>
    <li>
        <NavLink to="/admin/contact"><TiContacts />Contact</NavLink>
    </li>

    
</ul>
</div>
    </div>
  )
}

export default NavAdmin