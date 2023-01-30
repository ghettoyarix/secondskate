import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import DropDown from '../UI/DropDown/';
import Bid from '../UI/Bid';
import RangeSlider from '../UI/RangeSlider/';
import { getProducts } from '../../utils/getProducts';
import { useAuth } from '../../context/AuthContext';
import Button from '../UI/Button';

const Discover = ({ products }) => {
  function useDidUpdateEffect(fn, inputs) {
    const didMountRef = useRef(false);

    useEffect(() => {
      if (didMountRef.current) {
        return fn();
      }
      didMountRef.current = true;
    }, inputs);
  } // skip 1st render hook
  const { loading, currentUser } = useAuth();

  const categories = ['All items', 'Art', 'Game', 'Photography', 'Music', 'Video'];
  const priceSortOptions = ['Highest price', 'Lowest price'];
  const likesSortOptions = ['Most liked', 'Least liked'];
  const creatorSortOptions = ['Verified only', 'Any verification'];
  const discoverSortOptions = ['Recently added', 'Asnything'];

  const [chosenPriceSorter, setChosenPricSorter] = useState(priceSortOptions[0]);
  const [chosenLikesSorter, setChosenLikesSorter] = useState(likesSortOptions[0]);
  const [chosenCreatorSorter, setChosenCreatorSorter] = useState(creatorSortOptions[0]);
  const [discoverSorter, setDiscoverSorter] = useState(discoverSortOptions[0]);
  const [chosenCategory, setChosenCategory] = useState(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterProps = {
    chosenCategory,
    chosenPriceSorter,
    chosenLikesSorter,
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/getProducts?limit=10`);
      const json = await res.json();
      setFilteredProducts(json);
    };
    fetchProducts();
  }, []);

  return (
    <div className="wrapper py-32 ">
      <h1 onClick={() => console.log(filteredProducts)} className="text-giant pb-20  font-bold">
        Discover
      </h1>
      <div className="flex items-center  justify-between border-b-2 pb-8 border-lightGray">
        <div className="flex gap-3 content-center  items-center">
          {categories.map((obj) => (
            <p
              key={obj}
              onClick={() => setChosenCategory(obj)}
              className={cn(
                '  rounded-2xl cursor-pointer  py-[6px] px-3  my-auto   font-bold text-reg text-gray',
                {
                  'bg-black text-white': obj === chosenCategory,
                },
              )}>
              {obj}
            </p>
          ))}
        </div>
        <div className="max-w-[180px]">
          <DropDown
            chosenOption={discoverSorter}
            options={discoverSortOptions}
            pickOption={(obj) => setDiscoverSorter(obj)}></DropDown>
        </div>
        <Button primary className="text-mid">
          Filter <span className="font-thin">X</span>
        </Button>
      </div>
      <div className="grid grid-cols-4 my-8  text-[12px] text-gray font-bold   ">
        <div className="max-w-[256px]">
          <p className="mb-3">PRICE</p>
          <DropDown
            chosenOption={chosenPriceSorter}
            options={priceSortOptions}
            pickOption={(obj) => setChosenPricSorter(obj)}></DropDown>
        </div>
        <div className="max-w-[256px]">
          <p className="mb-3">LIKES</p>
          <DropDown
            chosenOption={chosenLikesSorter}
            options={likesSortOptions}
            pickOption={(obj) => setChosenLikesSorter(obj)}></DropDown>
        </div>
        <div className="max-w-[256px]">
          <p className="mb-3">CREATOR</p>
          <DropDown
            chosenOption={chosenCreatorSorter}
            options={creatorSortOptions}
            pickOption={(obj) => setChosenCreatorSorter(obj)}></DropDown>
        </div>
        <div className="max-w-[256px]">
          <RangeSlider
            className="pb-2   "
            min={2}
            max={10}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 mob:grid-cols-3  tab:grid-cols-4">
          {filteredProducts?.map((obj) => (
            <Bid key={obj._id} {...obj}></Bid>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
