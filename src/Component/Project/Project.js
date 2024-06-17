import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, Box, Typography } from '@mui/material';
import ProjectModal from './ProjectModal';
import './Project.css';
import img1 from '../../asset/pic5.jpg'

const projects = [
  {
    id: 1,
    title: 'PAYLE WALA',
    description: 'Description of Project 1',
    images: ['path_to_image1', 'path_to_image2'],
  },
  {
    id: 2,
    title: 'BYTE BILL',
    description: 'Description of Project 2',
    images: ['path_to_image3', 'path_to_image4'],
  },
  {
    id: 3,
    title: 'RUCHIKA',
    description: 'Description of Project 3',
    images: ['path_to_image5', 'path_to_image6'],
  },
  {
    id: 4,
    title: 'PAYLE WALA',
    description: 'Description of Project 1',
    images: ['path_to_image1', 'path_to_image2'],
  },
  {
    id: 5,
    title: 'BYTE BILL',
    description: 'Description of Project 2',
    images: ['path_to_image3', 'path_to_image4'],
  },
  {
    id: 6,
    title: 'RUCHIKA',
    description: 'Description of Project 3',
    images: ['path_to_image5', 'path_to_image6'],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
    initial={{y: 2000}}
    animate={{y: 0}}
    transition={{duration : 2}}
    
    className='dashboard'>
      
      <motion.div className='projects'>
        {projects.map((project) => (
          <motion.div
            className='projectcard'
            key={project.id}
            onClick={() => handleOpenModal(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              <img src={img1} width={'100%'} height={'100%'}/>
            <Typography variant="h6">{project.title}</Typography>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal 
          open={!!selectedProject} 
          onClose={handleCloseModal} 
          project={selectedProject} 
        />
      )}
    </motion.div>
  );
}
