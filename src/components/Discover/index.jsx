import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import DropDown from '../UI/DropDown/';
import Bid from '../UI/Bid';
import RangeSlider from '../UI/RangeSlider/';
import { useAuth } from 'context/AuthContext';
import Button from '../UI/Button';
import FilterBlock from './FilterBlock';
import NothingFound from './NothingFound';
import { useDiscover } from 'context/DiscoverContext';
import useUpdateEffect from 'hooks/useUpdateEffect';
const Discover = ({ products }) => {
  const { loading, currentUser } = useAuth();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const {
    categories,
    chosenPriceSorter,
    chosenLikesSorter,
    discoverSorter,
    setDiscoverSorter,
    chosenCategory,
    setChosenCategory,
    discoverSortOptions,
    isFilterShown,
    setIsFilterShown,
  } = useDiscover();

  const queryProps = {
    type: chosenCategory.type,
    category: chosenCategory.category,
    priceSorter: chosenPriceSorter.value,
    chosenLikesSorter,
  };
  useUpdateEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts?` +
          new URLSearchParams({ ...queryProps }),
      );
      const json = await res.json();
      setFilteredProducts(json.products);
    };
    fetchProducts();
  }, [chosenCategory, chosenPriceSorter]);
  const handleFilter = () => {
    setIsFilterShown((prev) => !prev);
  };
  return (
    <div className="wrapper py-12 ">
      <h1 onClick={() => console.log(filteredProducts)} className="text-giant pb-10  font-bold">
        Discover {}
      </h1>
      <div className="flex items-center  justify-between border-b-2 pb-8 border-lightGray">
        <div className="flex gap-3 content-center  items-center">
          {categories.map((obj) => (
            <p
              key={obj.title}
              onClick={() => setChosenCategory(obj)}
              className={cn(
                '  rounded-2xl cursor-pointer  py-[6px] px-3  my-auto   font-bold text-reg ',
                {
                  'bg-black text-white': obj.title === chosenCategory.title,
                },
              )}>
              {obj.title}
            </p>
          ))}
          <br />
        </div>
        <div className="max-w-[180px]">
          <DropDown
            chosenOption={discoverSorter}
            options={discoverSortOptions}
            pickOption={(obj) => setDiscoverSorter(obj)}></DropDown>
        </div>

        <Button onClick={handleFilter} primary className="text-mid  w-20">
          Filter {isFilterShown && <span className="font-thin">X</span>}
        </Button>
      </div>
      <FilterBlock></FilterBlock>
      <div className="flex mt-8 justify-center">
        {filteredProducts.length !== 0 ? (
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 mob:grid-cols-3  tab:grid-cols-4">
            {filteredProducts?.map((obj) => (
              <Bid key={obj._id} {...obj}></Bid>
            ))}
          </div>
        ) : (
          <NothingFound />
        )}
      </div>
    </div>
  );
};

export default Discover;
