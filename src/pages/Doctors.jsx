import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import {DoctorCard, Filter} from "../components";
import { doctor } from "../data/data";

const Doctors = () => {
  return (
    <div>
      <div className="bg-leafyGreen p-4 flex flex-col">
        <h1 className="text-3xl font-semibold mx-auto mt-4">
          Find expert Doctors for an In-clinic session here{" "}
        </h1>
        <div className="flex justify-center gap-4 my-4">
        <div className="flex bg-white cursor-pointer gap-2 p-2 w-50 rounded-lg border border-gray-400">
          <MapPin className="text-green" />
          <select
            id="location"
            name="location"
            className="outline-none cursor-pointer bg-white"
          >
            <option value="" disabled selected hidden>
              Select Location
            </option>
            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
            <option value="gurugram">Gurugram</option>
            <option value="haryana">Haryana</option>
          </select>
        </div>
        <span className="flex bg-white p-2 w-80 cursor-pointer rounded-lg border border-gray-400 justify-between">
        <input type="text" id="text" className="outline-none cursor-pointer w-80 bg-white" placeholder=" eg. Doctor, specialisation,clinic name" />
        <ArrowRight/>
        </span>
        </div>
      </div>
      <Filter/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-4 mx-40">
      {doctor.map((item) => (
        <DoctorCard key={item.id} item={item} />
      ))}      
      </div>
    </div>
  );
};

export default Doctors;
