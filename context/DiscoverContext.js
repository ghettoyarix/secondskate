import React, { useContext, useState, useEffect } from 'react';

const DiscoverContext = React.createContext();

export function useDiscover() {
  return useContext(DiscoverContext);
}

export function DiscoverProvider({ children }) {
  const categories = [
    { title: 'All items', category: 'any' },
    { title: 'Completes', type: 'completes' },
    { title: 'Decks', type: 'decks' },
    { title: 'Trucks', type: 'trucks' },
    { title: 'Wheels', type: 'wheels' },
    { title: 'Other', type: 'other' },
    { title: 'Shoes', category: 'shoes' },
  ];
  const priceSortOptions = [
    { title: 'Highest price', value: -1 },
    { title: 'Lowest price', value: 1 },
  ];
  const likesSortOptions = ['Most liked', 'Least liked'];
  const creatorSortOptions = ['Verified only', 'Any verification'];
  const discoverSortOptions = ['Recently added', 'Asnything'];

  const [chosenPriceSorter, setChosenPricSorter] = useState(priceSortOptions[0]);
  const [chosenLikesSorter, setChosenLikesSorter] = useState(likesSortOptions[0]);
  const [chosenCreatorSorter, setChosenCreatorSorter] = useState(creatorSortOptions[0]);
  const [discoverSorter, setDiscoverSorter] = useState(discoverSortOptions[0]);
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [isFilterShown, setIsFilterShown] = useState(false);

  const value = {
    categories,
    priceSortOptions,
    chosenPriceSorter,
    setChosenPricSorter,
    chosenLikesSorter,
    setChosenLikesSorter,
    chosenCreatorSorter,
    setChosenCreatorSorter,
    discoverSorter,
    setDiscoverSorter,
    chosenCategory,
    setChosenCategory,
    creatorSortOptions,
    discoverSortOptions,
    likesSortOptions,
    isFilterShown,
    setIsFilterShown,
  };

  return <DiscoverContext.Provider value={value}>{children}</DiscoverContext.Provider>;
}
