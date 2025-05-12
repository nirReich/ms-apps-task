import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'auto'
};

function AppModal({ children, open, onClose, title='' }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton aria-label="close" onClick={onClose}>
            x
          </IconButton>
        </Box>
        <div id="modal-modal-description">
          {children}
        </div>
      </Box>
    </Modal>
  );
}

export default AppModal;