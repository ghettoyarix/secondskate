import React, { useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { BRANDS, CONDITIONS } from 'constants/index';
import { Option } from 'types/models/FilterOptions';
import formChangeHandler from 'helpers/formChangeHandler';
import { z } from 'zod';
import { FormDataScheme } from 'helpers/upload/useUploadHook';
type FormData = z.infer<typeof FormDataScheme>;
type UploadType = {
  title: string;
  value: string;
};
type UploadCategory = {
  title: string;
  value: string;
  types: UploadType[];
};
type UploadContextType = {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
  chosenType: Option;
  setChosenType: Dispatch<SetStateAction<UploadType>>;
  chosenCategory: Option;
  chosenBrand: Option;
  setChosenBrand: Dispatch<SetStateAction<Option>>;
  chosenCondition: Option;
  setChosenCondition: Dispatch<SetStateAction<Option>>;
  setMainPhoto: Dispatch<SetStateAction<string>>;
  mainPhoto: string;
  setChosenCategory: Dispatch<SetStateAction<UploadCategory>>;
  categories: UploadCategory[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: FormData;
  setUploading: Dispatch<SetStateAction<boolean>>;
  uploading: boolean;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const UploadContext = React.createContext<UploadContextType>({} as UploadContextType);

export function useUpload() {
  return useContext(UploadContext);
}

export function UploadProvider({ children }: { children: React.ReactNode }) {
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
  const [formData, setFormData] = useState<FormData>({} as FormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formChangeHandler(event, formData, setFormData);
  };
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [chosenType, setChosenType] = useState(chosenCategory.types[0]);
  const [chosenBrand, setChosenBrand] = useState({} as Option);
  const [chosenCondition, setChosenCondition] = useState(CONDITIONS[0] as Option);
  const [mainPhoto, setMainPhoto] = useState('');

  const value: UploadContextType = {
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
    categories,
    handleChange,
    formData,
    setError,
    error,
    uploading,
    setUploading,
  };

  return <UploadContext.Provider value={value}>{children}</UploadContext.Provider>;
}
