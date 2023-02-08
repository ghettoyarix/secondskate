import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { hide } from '../../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditBidModal = () => {
  const { editModalFlag } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {};
  const handleClose = () => {
    dispatch(hide());
  };

  return (
    <Modal
      onClose={handleClose}
      open={editModalFlag}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className=" rounded-xl bg-lightGray w-[60%] h-[80%]   absolute mx-auto top-[10%] right-0 left-0  "></div>
    </Modal>
  );
};

export default EditBidModal;
