import React from 'react';
import { motion } from 'framer-motion';
import { FaRegSmileWink, FaGithub, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Cover.css';
import pic1 from '../../asset/pic5.jpg';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Cover({ isOpen, isProject,issProject }) {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleMouseEnter = (e) => {
    const icon = document.querySelector('.hello-icon');
    icon.style.transform = 'translateX(10px) rotate(20deg)';
  };

  const handleMouseLeave = (e) => {
    const icon = document.querySelector('.hello-icon');
    icon.style.transform = 'translateX(0) rotate(0)';
  };

 

  const renderTextWithSpaces = (text) => {
    return Array.from(text).map((char, index) => (
      <motion.span
        key={index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`letter`}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <motion.div
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className='cover'
    >
      <motion.div
        className="whi"
      
        animate={{ x: isOpen ? -250 : 20}}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={pic1}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
      <motion.div className='contect'  initial={{ x: 20 }}
        animate={{ x: isOpen ? -260 : 20 }}
        transition={{ duration: 0.5 }}>
        <motion.h4
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          {renderTextWithSpaces("Hello, I'm")}
          <FaRegSmileWink className="hello-icon" />
        </motion.h4>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          {renderTextWithSpaces("SUBHAJIT CHATTERJEE")}
        </motion.h1>
        <motion.p
          className="heading3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          {renderTextWithSpaces("A Full Stack Web Developer")}
        </motion.p>
        <div className='buttons'>
        <button className='contact-btn' onClick={handleContactClick}>Contact Me</button>
        <button className='project-btn' onClick={() => { isProject(true) }}>My Projects</button>
      </div>
      {showModal && <ContactModal handleClose={handleCloseModal} />}
    </motion.div>
      
      </motion.div>

  );
}
