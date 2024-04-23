import { HomeIcon } from "../icons";
import React from "react";

export const ExperienceCard = ({ item }) => {
  return (
    <div className="flex gap-20 my-4">
      <div className="flex gap-4">
        <HomeIcon />
        <div className="flex flex-col cursor-pointer">
          <h1>{item.name}</h1>
          <p className="text-gray-400">{item.post}</p>
        </div>
      </div>
      <p className="text-gray-400">{item.date}</p>
    </div>
  );
};
