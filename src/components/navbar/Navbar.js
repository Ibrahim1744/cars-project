import React, { useState } from 'react';
import './navbar.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Badge from '@mui/material/Badge';
import {FaBars} from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'
const Navbar = () => {
  const [activeMenu,setActiveMenu]=useState(false)
  const [activeLink,setActiveLink]=useState(1)

  const setStates=(num)=>{
    setActiveLink(num)
    setActiveMenu(false)
  }
  return (
    <>
    
    
      <div className="fixed-nav">
      <div className="container">
        <p> <strong>Limited Time Offer</strong> : up to <strong>70% discount</strong> already applied </p>
       </div>

      </div>
      <div className="contact-nav">
        <div className="contact-nav-content container">
        <div className="left-contact-nav">
        
          <a className='nav-phone' href="tel:+971526601227">
            <BsFillTelephoneFill/>
            <span>+971526601227</span>
          </a>
          <span className='nav-email'>
            <AiOutlineMail/>
            info@rotanastar.ae
          </span>
        </div>
        <div className="right-contact-nav">
          <div className="nav-socials">
            <a href="https://www.facebook.com/rotanastar.ae/"><AiFillFacebook/></a>
            <a href="https://www.instagram.com/rotanastarrentacar/"><AiOutlineInstagram/></a>  
          </div>
          <div className="cart">
          <Badge badgeContent={1}    color="error"  >
              <AiOutlineShoppingCart/>
          </Badge>
            
          </div>
        </div>

        </div>
      </div>
      <div className="categories-nav">
        <div className="categories-nav-content container">
        
        <Link to="/"><img src="https://www.rotanastar.ae/wp-content/uploads/2021/05/Rotana-logo-PNG-01-e1621511468274-300x236.png" alt="" /></Link>
        <div className={activeMenu ? 'menu active-menu' : 'menu'}>
          { activeMenu && <AiOutlineCloseCircle className='hamb-menu' onClick={()=>setActiveMenu(!activeMenu)}/>}
          { !activeMenu && <FaBars className='hamb-menu' onClick={()=>setActiveMenu(!activeMenu)}/>}
        </div>
        <ul className={activeMenu ? 'active-menu' : ''}>
        
          <li><Link onClick={()=>setStates(1)} className={activeLink === 1 ? 'active-link' : ''} to="/">Home</Link></li>
          <li><Link onClick={()=>setStates(2)} className={activeLink === 2 ? 'active-link' : ''}  to="/aboutus">About Us</Link></li>
          <li className='drop-down-link'><Link  onClick={()=>setActiveMenu(false)} to="/aboutus">Rent by Type of Cars 
            <div className="drop-down-1">
              <ul>
                <li ><Link  onClick={()=>setStates(3)} to='/exoticcars' className={activeLink === 3 ? 'active-link' : ''}  >Exotic cars</Link></li>
                <li><Link onClick={()=>setStates(4)} to='/luxurycars' className={activeLink === 4 ? 'active-link' : ''}>Luxury cars</Link></li>
                <li><Link onClick={()=>setStates(5)} to='/sportscar' className={activeLink === 5 ? 'active-link' : ''}>Sports cars</Link></li>
                <li><Link onClick={()=>setStates(6)} to='/suvcars' className={activeLink === 6 ? 'active-link' : ''}>SUV</Link></li>
                <li><Link onClick={()=>setStates(7)} to='/economycars' className={activeLink === 7 ? 'active-link' : ''}>Economy</Link></li>
              </ul>
            </div>
          </Link><AiOutlineArrowRight/></li>
          <li><Link onClick={()=>setStates(8)} to="/luxurycars" className={activeLink === 8 ? 'active-link' : ''}>Rent by Brand</Link></li>
          <li><Link onClick={()=>setStates(9)} to="/blog" className={activeLink === 9 ? 'active-link' : ''}>Blog</Link></li>
          <li><Link onClick={()=>setStates(10)} to="/faq" className={activeLink === 10 ? 'active-link' : ''}>FAQs</Link></li>
          <li><Link onClick={()=>setStates(11)} to="/contactus" className={activeLink === 11 ? 'active-link' : ''}>Contact Us</Link></li>
          <li><Link>English</Link></li>
          
        </ul>
        </div>
      
      </div>
      
    </>
  );
}

export default Navbar;
