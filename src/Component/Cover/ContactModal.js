import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';
import { motion } from 'framer-motion';

const ContactModal = ({ handleClose }) => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Use your own emailjs template parameters
    emailjs.sendForm('service_ft8njiq', 'template_iee4j1n', e.target, 'fwKu5_7UbCrH2s3Qg')
      .then((result) => {
        setIsSent(true);
        console.log(result.text);
        alert('Email sent successfully!');
        setMessage('');
        handleClose();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <motion.div
    className="modalm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="modal-contentm"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.5 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <span className="closem" onClick={handleClose}>&times;</span>
      <h2>Contact Me</h2>
      <form onSubmit={handleSendEmail}>
        <p>Send me an email:</p>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="message-input"
        ></textarea>
        <button type="submit" className="send-btn">Send</button>
      </form>
      {isSent && <p className="success-message">Email sent successfully!</p>}
    </motion.div>
  </motion.div>
);
};

export default ContactModal;
