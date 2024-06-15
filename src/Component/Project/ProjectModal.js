import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ProjectModal({ open, onClose, project }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <Box sx={style}>
        <Typography id="project-modal-title" variant="h6" component="h2">
          {project.title}
        </Typography>
        <Typography id="project-modal-description" sx={{ mt: 2 }}>
          {project.description}
        </Typography>
        <Carousel>
          {project.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Project ${project.id} - ${index}`} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Modal>
  );
}
