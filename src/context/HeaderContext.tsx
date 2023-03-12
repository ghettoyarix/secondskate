import React, { useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
interface Account {
  username: string;
  title: string;
  photoURL: string;
}
interface Product {
  photoURL: string;
  username: number;
  category: string;
  type: string;
}
interface HeaderContextType {
  searchedValue: string;
  setSearchedValue: (value: string) => void;
  accountsFound: Account[];
  setAccountsFound: React.Dispatch<React.SetStateAction<Account[]>>;
  productsFound: Product[];
  setProductsFound: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface HeaderProviderProps {
  children: ReactNode;
}
const HeaderContext = React.createContext({} as HeaderContextType);

export function useHeader(): HeaderContextType {
  return useContext(HeaderContext);
}
export function HeaderProvider({ children }: HeaderProviderProps) {
  const [accountsFound, setAccountsFound] = useState<Account[]>([]);
  const [productsFound, setProductsFound] = useState<Product[]>([]);

  const [searchedValue, setSearchedValue] = useState('');
  const value: HeaderContextType = {
    searchedValue,
    setSearchedValue,
    accountsFound,
    setAccountsFound,
    productsFound,
    setProductsFound,
  };

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
