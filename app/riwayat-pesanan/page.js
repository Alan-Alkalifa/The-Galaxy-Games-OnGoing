'use client'
import React, { useState } from 'react';
import RiwayatNav from '../component/RiwayatNav';
import Image from 'next/image';

const products = [
    {
      id: 1,
      image: "/cardPes1.svg",
    },
    {
      id: 2,

      image: "/cardPes2.svg",
    },
    {
        id: 3,
  
        image: "/cardPes3.svg",
      },
      {
        id: 4,
  
        image: "/cardPes4.svg",
      },
      {
        id: 5,
        image: "/cardPes5.svg",
      },
      {
        id: 6,
  
        image: "/cardPes6.svg",
      },
      {
        id: 7,
  
        image: "/cardPes7.svg",
      },
      {
        id: 8,
  
        image: "/cardPes8.svg",
      },
      {
        id: 9,
  
        image: "/cardPes8.svg",
      },
      {
        id: 10,
    
        image: "/cardPes1.svg",
      },
      {
          id: 11,
      
          image: "/cardPes2.svg",
        },
        {
          id: 12,
      
          image: "/cardPes3.svg",
        },
        {
          id: 13,
      
          image: "/cardPes4.svg",
        },
        {
          id: 14,
      
          image: "/cardPes5.svg",
        },
        {
          id: 15,
      
          image: "/cardPes6.svg",
        },
        {
          id: 16,
      
          image: "/cardPes7.svg",
        },
    // Add other products here
  ];


const RiwayatPesanan = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleCards = () => {
    setShowMore(!showMore);
  };

  return (
    <> <div className='bg-[#6C6C6C]'>
      <RiwayatNav/>
      <div className='bg-gradient-to-t from-[#6C6C6C] to-black'>
        <h1 className='p-10 text-[100px] font-bold text-center text-green-400 opacity-50'>RIWAYAT PESANAN</h1>
        <div className='flex items-center justify-between px-20'>
          <p className='text-center font-bold text-3xl'>Kimchipantha</p>
          <Image src='/profileCheckout.svg' alt='kimchipantha' width={100} height={100}/>
        </div>
        <p className='border-t px-32 mx-20 mt-3'></p>
        <div className="grid grid-cols-4 gap-4 p-20 rounded-lg">
          {products.slice(0, 8).map(product => (
            <div key={product.id} className="product-card relative group bg-[#151515] bg-opacity-45 rounded-lg p-5">
              <Image src={product.image} alt={product.name} width={500} height={100} className='rounded-lg p-2' />
              <p>{product.name}</p>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl">More Details</p>
              </div>
            </div>
          ))}
          {showMore && products.slice(8).map(product => (
            <div key={product.id} className="product-card relative group bg-[#151515] bg-opacity-45 rounded-lg p-5">
              <Image src={product.image} alt={product.name} width={500} height={100} className='rounded-lg p-2' />
              <p>{product.name}</p>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl">More Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-10">
          <button onClick={toggleCards} className=" text-white font-bold rounded" >
            {showMore ? '' : ''}
            <Image src='/arrow-down.svg' alt='arrow-down-on-square' width={20} height={20} />
          </button>
        </div>
        </div>
    </>
  );
};

export default RiwayatPesanan;