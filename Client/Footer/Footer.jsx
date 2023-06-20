import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCircleInfo, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className = "container">
        <div className="items">
            <ul className="nav">
                <li className="item1"><FontAwesomeIcon icon={faPhone} className="icons" style={{color: "#f7f7f7",}} />Contact us</li>
                <li className= "item2"><FontAwesomeIcon icon={faAddressCard} className="icons" style={{color: "#f7f7f7",}} />About us</li>
               

            </ul>
            <div className ="copyright">copyright @2023 all right reseved</div>
        </div>
      
    </div>
  )
}

export default Footer;
