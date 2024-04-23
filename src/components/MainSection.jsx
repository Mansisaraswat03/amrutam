import React from 'react'
import {About, Specialized, Concerns, Experience, Appointment, Reviews} from '../components' 

export const MainSection = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto w-11/12'>
    <div>
    <About/>
    <Specialized/>
    <Concerns/>
    <Experience/>
    <Reviews/>
    </div>
    <Appointment/>
    </div>
  )
}


