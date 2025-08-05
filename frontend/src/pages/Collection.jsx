import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = Array.isArray(products) ? products.slice() : [];
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProduct(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();
    if (sortType === 'low-high') {
      fpCopy.sort((a, b) => a.price - b.price);
      setFilterProduct(fpCopy);
    } else if (sortType === 'high-low') {
      fpCopy.sort((a, b) => b.price - a.price);
      setFilterProduct(fpCopy);
    } else {
      applyFilter();
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
    // eslint-disable-next-line
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category option */}
        <div className={`border border-gray-200 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 pl-5 py-5 mt-6 transition-all duration-300 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-base font-semibold tracking-wide text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-blue-600 transition'>
              <input className='w-4 h-4 accent-blue-500 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-pink-600 transition'>
              <input className='w-4 h-4 accent-pink-500 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-green-600 transition'>
              <input className='w-4 h-4 accent-green-500 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>
        {/* Subcategory Filter */}
        <div className={`border border-gray-200 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 pl-5 py-5 my-6 transition-all duration-300 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-base font-semibold tracking-wide text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-blue-500 transition'>
              <input className='w-4 h-4 accent-blue-400 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-green-500 transition'>
              <input className='w-4 h-4 accent-green-400 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-purple-500 transition'>
              <input className='w-4 h-4 accent-purple-400 cursor-pointer' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e) => { setSortType(e.target.value); }} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item, index) => (
            <ProductItem key={item._id || index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection
