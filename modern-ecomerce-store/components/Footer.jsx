import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 SirVinlex Store All rights reserved</p>
      <p className='icon'>
        <AiFillInstagram/>
        <AiOutlineTwitter/> 
      </p>
    </div>
  )
}

export default Footer