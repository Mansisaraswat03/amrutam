import { FacebookIcon, Instagram, InstagramIcon, Plus, Twitter, Youtube } from "lucide-react";
import React from "react";
import { languages } from "../data/data";

export const About = () => {
  return (
    <div className="h-auto border border-grey rounded-xl m-7">
      <div className="flex justify-between px-6 items-center bg-bg rounded-t-xl">
        <h1 className="text-sm lg:text-xl font-semibold">A Little About me</h1>
        <button className="flex items-center px-2 m-2 p-1 cursor-pointer font-semibold text-black bg-bg border border-green rounded-md mr-4">
          Follow <Plus />
        </button>
      </div>
      <div className="my-4">
        <p className="p-4 text-gray-400 text-xl">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
        </p>
        <div className="flex items-center">
        <hr className="w-4/5 mx-4"/>
        <p className="font-bold cursor-pointer">Read More</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-6 mx-auto w-10/12 my-2">
        <div className="font-semibold text-xl">Language Spoken</div>
        {languages.map((item) => <div key={item.id} className="bg-shade cursor-pointer rounded-full text-lg text-gray-500 p-2 px-3 gap-2">{item.name}</div>)} 
      </div>
      <div className="flex items-center gap-6 mx-auto w-10/12 my-4">
      <FacebookIcon className="rounded-full p-2 bg-gray-100 h-10 w-10 cursor-pointer"/> 
      <Instagram className="rounded-full p-2 bg-gray-100 h-10 w-10 cursor-pointer"/>
      <Youtube className="rounded-full p-2 bg-gray-100 h-10 w-10 cursor-pointer"/>
      <Twitter className="rounded-full p-2 bg-gray-100 h-10 w-10 cursor-pointer"/>
      </div>
      
    </div>
  );
};
