import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
import './About.css';
import resume from '../../asset/resume1.pdf';

const iconHoverEffect = {
  scale: 1.2,
  transition: { duration: 0.3 },
};

const textHoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

const iconStyle = {
  cursor: 'pointer',
  margin: '0 10px',
};

export default function About() {
  const handleDownload = () => {
    saveAs(resume, 'resume.pdf');
  };

  return (
    <motion.div 
      className="about" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={textHoverEffect}
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={textHoverEffect}
      >
        Hi, I'm Subhajit Chatterjee, a passionate Full Stack Web Developer. I have experience in building web applications using modern technologies. I enjoy solving problems and continuously improving my skills.
      </motion.p>
      <motion.h2
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={textHoverEffect}
      >
        Contact Me
      </motion.h2>
      <motion.div 
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a href="https://github.com/subhajit722?tab=repositories" target="_blank" rel="noopener noreferrer" whileHover={iconHoverEffect}>
          <FaGithub style={iconStyle} />
        </motion.a>
        <motion.a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer" whileHover={iconHoverEffect}>
          <FaLinkedin style={iconStyle} />
        </motion.a>
        <motion.a href="https://www.facebook.com/jit.chatterjee.3720" target="_blank" rel="noopener noreferrer" whileHover={iconHoverEffect}>
          <FaFacebook style={iconStyle} />
        </motion.a>
        <motion.a href="https://www.youtube.com/channel/UCHg5ToTOpl6H5QJP4pOWkKw" target="_blank" rel="noopener noreferrer" whileHover={iconHoverEffect}>
          <FaYoutube style={iconStyle} />
        </motion.a>
        <motion.a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer" whileHover={iconHoverEffect}>
          <FaWhatsapp style={iconStyle} />
        </motion.a>
      </motion.div>
      <motion.div
        className="contact-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.p whileHover={textHoverEffect}>Phone: <a href="tel:+YOUR_PHONE_NUMBER">+918293627665</a></motion.p>
        <motion.p whileHover={textHoverEffect}>Email: <a href="mailto:your.email@example.com">jit2pppp@gmail.com</a></motion.p>
      </motion.div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleDownload} 
        style={{ marginTop: '20px' }}
      >
        Download Resume
      </Button>
    </motion.div>
  );
}
