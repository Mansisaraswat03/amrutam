import React from 'react';
import { Tick } from '../icons/tick';
import { Star } from '../icons';
import { data } from '../data/data';

export const Hero = () => {
  return (
    <div className='my-8 mx-auto px-4 sm:px-6 lg:px-8'>
      <img src='/hero.jpg' alt="hero" className='mx-auto h-20 w-11/12 rounded-lg' /> 
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-20 justify-around bg-light mx-auto h-auto lg:h-20 w-11/12 py-6'>
        <div className='flex items-center gap-2'>
          <img src='/dp.jpg' alt="dp" className='rounded-full h-20 sm:h-24 lg:h-28 cursor-pointer w-20 sm:w-24 lg:w-28 transform -translate-y-1/3 sm:ml-0 lg:ml-20' /> 
          <div>
            <h1 className='font-semibold mt-2 text-lg sm:text-xl lg:text-2xl flex gap-2 items-center'>Dr. Bruce Willis <Tick/></h1>
            <h2 className='text-green text-sm font-semibold'>Gynecologist</h2>
            <p className='flex items-center gap-1'>4.2 <Star/><Star/><Star/><Star/></p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center sm:gap-20'>
          {data.map((item) => (
            <div key={item.name} className='mb-4 sm:mb-0'>
              <h2 className='text-green text-sm font-semibold'>{item.name}</h2>
              <p className='font-bold'>{item.val}</p>
            </div>
          ))}
        </div>
        <button className=" px-4 py-2 m-auto cursor-pointer text-white bg-green rounded-md">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};
