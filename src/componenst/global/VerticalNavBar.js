import React from 'react'
import { BsHouse, BsSearch, BsClockHistory, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../styles/VerticalNavbar.css'

export default function VerticalNavBar({children}) {


    const handleLinkClick = (e) => {
        const inputs = document.querySelectorAll('a');

        inputs.forEach((element) => {
            element.classList.remove("VerticalNavBar-active")
        })
        e.target.classList.add("VerticalNavBar-active")
    }
    
    return (
        <div className="VertivcalNavBar-container">
            <div className="VerticalNavBar">
                <Link id="home" onClick={handleLinkClick} className="VerticalNavBar-active"><BsHouse className="VerticalNavBar-svg"></BsHouse></Link>
                <Link to="/report" id="home" onClick={handleLinkClick} ><BsList className="VerticalNavBar-svg"></BsList></Link>
                <Link id="find" onClick={handleLinkClick}><BsSearch className="VerticalNavBar-svg"></BsSearch></Link>
                <Link id= "history" onClick={handleLinkClick}><BsClockHistory className="VerticalNavBar-svg"></BsClockHistory></Link>
            </div>
            {children}
        </div>
    )
}
