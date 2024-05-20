import React, { useEffect, useState } from 'react';
import { navbarData } from '../../../utils/NavbarData'; // Navbar verilerini içeri aktarın
import './RespNavbar.scss';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function RespNavbar() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(false);
    const [openChildAccordionIndex, setOpenChildAccordionIndex] = useState(false);
    const [navbarText, setnavbarText] = useState([])

    async function TextGetData() {
        const res = await axios.get("http://localhost:5000/idmanNovleri")
        setnavbarText(res.data)
    }
    const handleOpenAccordion = () => {
        setOpenAccordionIndex(!openAccordionIndex)
        // setOpenAccordionIndex(prevIndex => prevIndex === index ? null : index);
    };

    const handleOpenChildAccordion = () => {
        setOpenChildAccordionIndex(!openChildAccordionIndex)
        // setOpenChildAccordionIndex(prevIndex => prevIndex === index ? null : index);
    };
    useEffect(() => {
        TextGetData()
    }, [])
    return (
        <ul className='accordion1'>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Ana Səhifə</p>
                </li>
            </Link>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Haqqımızda</p>
                </li>
            </Link>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Milli komandalar</p>
                </li>
            </Link>
            <Link className='link' to={'sa'}>
                <li className='accordionFirstLi' >

                    <p className='text1' onClick={handleOpenAccordion}>İdman növləri <span className='arrowBox' >
                        {
                            openAccordionIndex ? <IoMdArrowDropup /> : <IoMdArrowDropdown />
                        }
                    </span></p>
                    <ul className={`text2 ${openAccordionIndex ? 'openAccordion' : ''}`}>
                        {navbarText.map((item, index) => (
                            <li key={index}>
                                <Link className='pageLink' to={`/page/${item.name}`}  onClick={handleOpenChildAccordion}>
                                    {item.name}
                                </Link>

                                {
                                    item.Alt.length > 0 ? <IoMdArrowDropup /> : ""
                                }

                                <ul className={`altText ${openChildAccordionIndex ? "openSecondAccordion" : ""}`}>
                                    {item.Alt.map((altItem, index) =>
                                        <li key={index}>
                                            <Link className='pageLink' to={`/page/${altItem.name}`}>
                                                {altItem.name}
                                            </Link>
                                        </li>)}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </Link>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Xəbər</p>
                </li>
            </Link>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Media</p>
                </li>
            </Link>
            <Link className='link' to={''}>
                <li className='accordionFirstLi'>
                    <p className='text1'>Əlaqə</p>
                </li>
            </Link>
        </ul>
    );
}

export default RespNavbar;
