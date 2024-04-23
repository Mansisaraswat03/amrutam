import React from "react";
import { Star } from "../icons";
export const ReviewCard = ({ item }) => {
  const stars = [];
  for (let i = 0; i < item.star; i++) {
    stars.push(<Star key={i} />);
  }
  return (
    <div className="flex flex-col gap-4 py-4 px-8 shadow bg-shade rounded-xl mb-8 cursor-pointer">
      <div className="flex items-center gap-28">
        <div className="flex items-center gap-4">
          <img src={item.dp} alt="DP" className="rounded-full w-12 h-12" />
          <div className="flex items-center flex-col ">
            <h1 className="text-xl font-semibold mr-3">{item.name}</h1>
            <p className="text-gray-400 text-lg">{item.consulted}</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg">{item.date}</p>
      </div>
      <div className="flex items-center">{stars}</div>
      <p className="text-lg">{item.description}</p>
    </div>
  );
};
