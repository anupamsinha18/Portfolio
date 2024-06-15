import React from 'react';
import './Home.css';
import vid from '../../asset/background.mp4'
import Cover from '../../Component/Cover/Cover';
import Project from '../../Component/Project/Project';
import { useState } from 'react';
import { motion } from 'framer-motion';
import About from '../../Component/About/About';

export default function Home({isOpen,isHome,isAbout,projectopen,showall}) {
 
  return (
    <div className='home'>
      <video autoPlay muted loop className='background-video'>
        <source src={vid} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='content'>
      <motion.div initial={{y : 0}}
        animate={{y : projectopen ? -300 : 0 }}
        >
        <Cover isOpen={isOpen} isProject={showall} issProject={projectopen}/>
        </motion.div>
        <motion.div initial={{y : 0}}
        animate={{y : projectopen ? -300 : 0 }}
        >
         
          {isAbout ? <About/> : <Project isProject={projectopen}/>}

        {/* <Project isProject={projectopen}/> */}
        </motion.div>
       
      </div>
    </div>
  );
}
