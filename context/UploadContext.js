import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
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

  const [chosenType, setChosenType] = useState();
  const [chosenCategory, setChosenCategory] = useState(categories[0]);

  const value = {
    chosenType,
    setChosenType,
    chosenCategory,
    test: 'test2',
    setChosenCategory,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
