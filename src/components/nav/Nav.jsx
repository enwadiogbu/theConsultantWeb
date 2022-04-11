import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {RiMessage2Line} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><RiHomeLine /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmark /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineCustomerService /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>

    </nav>
  )
}

export default Nav