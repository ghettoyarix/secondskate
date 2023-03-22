import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { hide } from 'redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/UI/Button';
import Bid from 'components/UI/Bid';
import deleteProduct from 'lib/firebase/utils/deleteProduct';
import { UploadProvider } from 'context/UploadContext';
import CheckmarkLoader from 'components/widgets/CheckmarkLoader';
import Image from 'next/image';
import { useRouter } from 'next/router';
const RemoveBidModal = () => {
  const router = useRouter();
  const { removeModalFlag, defaultValues } = useSelector((state: any) => state.modal);
  const [deletion, setDeletion] = useState(false);
  const [deletedSuccesfully, setDeletedSuccesfully] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hide());
  };
  const handleDelete = async () => {
    setDeletion(true);
    const hasBeenDeleted = await deleteProduct(defaultValues.productId);
    setDeletedSuccesfully(() => true);
    setTimeout(handleClose, 400);
    setDeletion(false);
  };

  return (
    <Modal
      onClose={handleClose}
      open={removeModalFlag}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div
        className=" rounded-xl py-4 flex justify-center  items-center flex-col max-h-[700px]
       bg-white min-w-[256px] max-w-[25%] h-[70%]   absolute mx-auto top-[10%] right-0 left-0  ">
        {deletion ? (
          <div>
            <CheckmarkLoader done={deletedSuccesfully}></CheckmarkLoader>
            {deletedSuccesfully && (
              <p
                onClick={() => console.log(deletedSuccesfully)}
                className="mt-4 text-mid text-center px-4 text-primary">
                Your bid has been deleted
              </p>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </Modal>
  );
};

export default RemoveBidModal;
