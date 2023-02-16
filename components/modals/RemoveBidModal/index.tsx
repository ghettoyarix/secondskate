import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { hide } from '../../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import Bid from '../../UI/Bid';
import { UploadProvider } from '../../../context/UploadContext';
const RemoveBidModal = () => {
  const { removeModalFlag, defaultValues } = useSelector((state: any) => state.modal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hide());
  };
  const handleDelete = () => {};

  return (
    <Modal
      onClose={handleClose}
      open={removeModalFlag}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className=" rounded-xl py-4 flex   items-center flex-col max-h-[700px] bg-white min-w-[256px] max-w-[30%] h-[80%]   absolute mx-auto top-[10%] right-0 left-0  ">
        <p className="font-bold mb-2 bg-white max-w-[80%]   border-primary-2 text-primary text-lable">
          Are you sure that you would like to delete this product?
        </p>

        <div className="scale-[0.8] mt-[-30px]">
          <Bid still {...defaultValues}></Bid>
          <div className="flex justify-between">
            <Button primary onClick={handleDelete}>
              Delete
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveBidModal;
