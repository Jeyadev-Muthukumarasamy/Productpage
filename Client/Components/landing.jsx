import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping,faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import Footer from '../Footer/footer';





const Landing = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav-left">
          <img src = "" className="logo"></img>
       

        
          
          <ul>
            <li className="nav"><Link to="/">Home</Link></li>
            <li className="nav">Cart</li>
            {/* <li className="nav">Profile</li> */}
          </ul>
        
          
        </div>
        <div className="nav-right">
          <input type="text" placeholder="search for products here"/>
          
          <FontAwesomeIcon icon={faCartShopping} className = "Cart" style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faUser} className="profile" style={{color: "#ffffff",}} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search" style={{color: "#141414",}} />
          
        </div>
      </nav>
      
    <Card />
    <Footer />



      
      
     
      
      
        

    </Fragment>
    
    
    
    
  )

}

export default Landing
