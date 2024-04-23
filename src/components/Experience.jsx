import React from 'react';
import { ExperienceCard } from '../components';
import { experienceData } from '../data/data';
export const Experience = () => {
  return (
    <div className="h-auto border border-grey rounded-xl m-7">
        <h1  className=" px-6 h-10 flex items-center text-sm lg:text-xl font-semibold bg-bg rounded-t-xl">My Work Experience</h1>
        <div className='p-4'>
          <h2 className='text-green text-xl font-semibold mb-4'>I have been in practice for : 7+ Years</h2>
          <hr className='w-4/5 text-grey my-2'/>
           {experienceData.map((item) => <ExperienceCard key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

