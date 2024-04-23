import React from "react";
import { Women, SkinCare, HairCare, Immunity } from "../icons";
export const Specialized = () => {
  return (
    <div className="h-auto border border-grey rounded-xl m-7">
      <h1 className=" px-6 h-10 flex items-center text-sm font-semibold lg:text-xl bg-bg rounded-t-xl">
        I specialize In
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="flex flex-col items-center p-2 cursor-pointer">
          <Women />
          <p className="font-semibold">Women's Health</p>
        </div>
        <div className="flex flex-col items-center p-2 cursor-pointer">
          <SkinCare />
          <p className="font-semibold">Skin Care</p>
        </div>
        <div className="flex flex-col items-center p-2 cursor-pointer">
          <HairCare />
          <p className="font-semibold">Hair Care</p>
        </div>
        <div className="flex flex-col items-center p-2 cursor-pointer">
          <Immunity />
          <p className="font-semibold">Immunity</p>
        </div>
      </div>
    </div>
  );
};
