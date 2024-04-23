import { React, useState } from "react";

export const Time = ({ time}) => {
    const [timee, setTime] = useState(null);
    const handleTimeClick = (item) => {
        setTime(item);
      };
  return (
    <div className={`flex  py-4 cursor-pointer rounded-xl justify-center ${timee===time ? "bg-green text-white" : "border border-gray-300"}`} onClick={() => handleTimeClick(time)}>{time}</div>
  );
};