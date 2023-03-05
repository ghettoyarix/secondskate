import React, { useContext, useState, useEffect } from 'react';
import { CONDITIONS } from 'constants';
const UploadContext = React.createContext();

export function useUpload() {
  return useContext(UploadContext);
}

export function UploadProvider({ children }) {
  const categories = [
    {
      title: 'Skateboards',
      value: 'skateboards',
      types: [
        { title: 'Decks', value: 'decks' },
        { title: 'Trucks', value: 'trucks' },
        { title: 'Wheels', value: 'wheels' },
        { title: 'Other', value: 'other' },
        { title: 'Completes', value: 'completes' },
      ],
    },
    {
      title: 'Shoes',
      value: 'shoes',
      types: [
        { title: 'Leather', value: 'leather' },
        { title: 'Seude', value: 'seude' },
        { title: 'Canvas', value: 'canvas' },
      ],
    },
  ];

  const [mainPhoto, setMainPhoto] = useState();

  const [chosenCondition, setChosenCondition] = useState(CONDITIONS[0]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [files, setFiles] = useState([]);
  const [chosenBrand, setChosenBrand] = useState();

  const [test, setTest] = useState(0);

  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [chosenType, setChosenType] = useState(chosenCategory.types[0]);

  const change = () => {
    setTest((prev) => prev + 2);
  };
  const value = {
    CONDITIONS,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    size,
    setSize,
    files,
    setFiles,
    chosenType,
    setChosenType,
    chosenCategory,
    chosenBrand,
    setChosenBrand,
    chosenCondition,
    setChosenCondition,
    setMainPhoto,
    mainPhoto,
    setChosenCategory,
    chosenType,
    setChosenType,
    categories,
  };

  return <UploadContext.Provider value={value}>{children}</UploadContext.Provider>;
}
