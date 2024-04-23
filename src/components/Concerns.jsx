import React from 'react'
import { concernData } from '../data/data'

export const Concerns = () => {
  return (
    <div className="h-auto border border-grey rounded-xl m-7">
        <h1  className=" px-6 h-10 flex items-center text-sm lg:text-xl font-semibold bg-bg rounded-t-xl">The Concerns | Treat</h1>
      <div className='grid grid-cols-4 p-4 gap-4'>
        {concernData.map((item) => (
          <div key={item.id} className="flex justify-center bg-shade rounded-full p-2 cursor-pointer">{item.name}</div>
        ))}
        <div className="flex justify-center border border-shade-300 rounded-full p-2 cursor-pointer"> +5 More </div>
      </div>
    </div>
  )
}


