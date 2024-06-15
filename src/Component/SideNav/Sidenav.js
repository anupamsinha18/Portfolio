
import pic1 from '../../asset/pic5.jpg';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Sidenav.css';

export default function Sidenav({ setIsOpen, isOpen,isHomes,isAbouts,openHome,openAbout,isProject }) {
  const sidenavRef = useRef(null);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className='sidenav'
      ref={sidenavRef}
      initial={{ width: 50 }}
      animate={{ width: isOpen ? 200 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: isOpen ? 150 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <MenuIcon onClick={toggleSidenav} style={{ cursor: 'pointer' }} />
      </motion.div>
{isOpen ? 
      <motion.div
        className="whi"
      initial={{y: -220}}
        animate={{ y: isOpen ? 10 : -20, x : -10}}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={pic1}
          className="propic"
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
: ''}
     <motion.div 
        initial={{ y: 20 }}
        animate={{ y: isOpen ? 190 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className='sidenav-content'>
          <motion.div className='nav-item' whileHover={{ scale: 1.2 }}>
            <HomeIcon onClick={()=>{isHomes(!openHome)
              isAbouts(false)
              isProject(false)
            }}  />
            {isOpen && <span onClick={()=>{isHomes(!openHome)
              isAbouts(false)
               isProject(false)
            }} >Home</span>}
          </motion.div>
          <motion.div className='nav-item' whileHover={{ scale: 1.2 }}>
            <WorkIcon onClick={()=>
              {
                isAbouts(false)
                isProject(true)}} />
            {isOpen && <span onClick={()=>{
              isAbouts(false)
              isProject(true)}}>Projects</span>}
          </motion.div>
          <motion.div className='nav-item' whileHover={{ scale: 1.2 }}>
            <InfoIcon onClick={()=>{isAbouts(!openAbout) 
              isHomes(false)
              isProject(false)}}
               />
            {isOpen && <span onClick={()=>{isAbouts(true) 
              isHomes(false)
             }}>About</span>}
          </motion.div>
          <div className='social-iconss'>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaLinkedin />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaFacebook />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaYoutube />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaWhatsapp />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>)}