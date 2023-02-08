import React, { useEffect, useState } from 'react';
import checkEmail from '../utils/checkEmail';
import { getProfile } from '../utils/getProfile';
import ProfileLoader from '../components/UI/loaders/ProfileLoader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Test = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  useEffect(() => {
    setsecond((prev) => prev + 2);
  }, [first]);

  const check = async () => {
    setfirst((prev) => prev + 2);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div>112</div>
      </Modal>
    </div>
  );
};

export default Test;
