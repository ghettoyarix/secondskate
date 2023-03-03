import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { hide, modalSlice } from '../../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import BidEditor from '../../BidEditor';
import { UploadProvider } from '../../../context/UploadContext';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
const EditBidModal = () => {
  const dispatch = useAppDispatch();
  const { editModalFlag, defaultValues } = useAppSelector((state) => state.modal);
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
      <div className=" rounded-xl overflow-scroll max-h-[800px] bg-white w-[60%] h-[80%]   absolute mx-auto top-[10%] right-0 left-0  ">
        <UploadProvider>
          <div className="flex justify-center ">
            <BidEditor editMod defaultValues={defaultValues}></BidEditor>
          </div>
        </UploadProvider>
      </div>
    </Modal>
  );
};

export default EditBidModal;
