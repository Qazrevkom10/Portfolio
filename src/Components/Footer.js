import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mukanbet Iliyas</h4>
      <h4>Copyright &copy; 2024 MI</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Qazrevkom10" target='_blank'><FaGithub/></a>
        <a href='iliyasmukanbet@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer