import React, { useState } from 'react';
import { navbarData } from '../../../utils/NavbarData'; // Navbar verilerini içeri aktarın
import './RespNavbar.scss';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

function RespNavbar() {
    const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
    const [openChildAccordionIndex, setOpenChildAccordionIndex] = useState(null);

    const handleOpenAccordion = (index) => {
        setOpenAccordionIndex(prevIndex => prevIndex === index ? null : index);
    };

    const handleOpenChildAccordion = (index) => {
        setOpenChildAccordionIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <ul className='accordion1'>
            {navbarData.map((item, index) => (
                <li className='accordionFirstLi' key={index}>

                    <p className='text1' onClick={() => handleOpenAccordion(index)}>
                        {
                            item.childData ? <div className="arrowBox">
                                {
                                    openAccordionIndex === index ? <RiArrowDropUpLine />
                                        : <RiArrowDropDownLine />
                                }


                            </div> : ""
                        }
                        {item.name}</p>
                    <ul className={`text2 ${openAccordionIndex === index ? 'openAccordion' : ''}`}>
                        {item.childData?.map((childItem, childIndex) => (
                            <li key={childIndex}>
                                <p className='accardionText2' onClick={() => handleOpenChildAccordion(childIndex)}>
                                    {
                                        childItem.thridData ?
                                            <div className="arrowBox">
                                                {
                                                    openChildAccordionIndex === childIndex ? <RiArrowDropUpLine />
                                                        : <RiArrowDropDownLine />
                                                }
                                            </div> : ""
                                    }
                                    {childItem.name}</p>
                                {childItem.thridData && (
                                    <ul className={`thirdAccordion ${openChildAccordionIndex === childIndex ? 'openSecondAccordion' : ''}`}>
                                        {childItem.thridData.map((thirdItem, thirdIndex) => (
                                            <li key={thirdIndex}>{thirdItem.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default RespNavbar;
