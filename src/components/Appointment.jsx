import { React, useState } from "react";
import { mode, timeSlots } from "../data/data";
import { Calender, GreenTick } from "../icons";
import { Time } from "../components";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const Appointment = () => {
  const [click, setClick] = useState(null);
  const [slott, setSlot] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const timePlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:15 AM",
    "10:45 AM",
    "11:00 AM",
    "4:00 PM",
    "4:15 PM",
    "4:30 PM",
    "4:45 PM",
    "5:15 PM",
  ];

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNext = () => {
    const numSlots = timeSlots.length;
    if (currentIndex < numSlots - 3) {
      setCurrentIndex(currentIndex + 1);
      console.log(",,,,,,,", currentIndex);
    }
  };

  const handleClick = (item) => {
    setClick(item);
  };

  const handleSlotClick = (item) => {
    setSlot(item);
  };

  return (
    <div className="h-1/2 border border-grey rounded-xl m-7 px-4">
      <div className="flex justify-between border border-grey rounded-lg px-4 p-2 my-4">
        <h1 className="text-lg font-medium">Appointment Fee</h1>
        <p className="text-green font-medium">₹699.00</p>
      </div>
      <div className="flex items-center gap-1 ml-1 my-2">
        <span className="font-semibold text-lg">
          Select your mode of session
        </span>
        <hr className="w-3/5 " />
      </div>
      <div className="flex items-center gap-8 justify-center my-2">
        {mode.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer rounded-xl text-md px-12 py-2 ${
              click === item ? " bg-leafyGreen" : "border border-gray-200"
            }`}
            onClick={() => handleClick(item)}
          >
            <h1
              className={`font-bold flex items-center gap-2 ${
                click === item ? "text-green" : ""
              }`}
            >
              {item.name}{" "}
              {click === item ? <GreenTick className="block" /> : ""}
            </h1>
            <p className="text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 ml-1 my-4">
        <span className="font-semibold text-lg">Pick a Time slot</span>
        <hr className="w-3/5 " />
        <Calender />
      </div>
      <div className="flex items-center gap-8 justify-center border border-grey rounded-xl p-4">
        <div className="flex items-center gap-10 relative">
          <div>
            <ChevronLeft
              onClick={showPrev}
              className="absolute cursor-pointer text-gray-400 inset-y-0 mt-6 left-0 flex items-center justify-center rounded-full border border-gray-400"
            />
          </div>
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentIndex * 102}%)` }}
            >
              {timeSlots
                .slice(currentIndex, currentIndex + 3)
                .map((slot, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer px-4 py-4 rounded-md w-auto  ${
                      slott === slot
                        ? " bg-leafyGreen"
                        : "border border-gray-300"
                    }`}
                    onClick={() => handleSlotClick(slot)}
                  >
                    <h1
                      className={`text-sm font-bold ${
                        slott === slot ? "text-green" : ""
                      }`}
                    >
                      {slot.day}
                    </h1>
                    <p
                      className={`font-bold ${
                        slot.slots >= 6 ? "text-gray-400" : ""
                      } ${slot.slots <= 3 ? "text-red-400" : ""} ${
                        slot.slots > 4 && slot.slots < 6
                          ? "text-yellow-400"
                          : ""
                      }`}
                    >
                      {slot.slots} slots
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <ChevronRight
              onClick={showNext}
              className="absolute inset-y-0 ml-10 cursor-pointer text-gray-400 mt-6 right-0 rounded-full border border-gray-400"
            />
          </div>
        </div>
      </div>

      <h1 className="text-lg font-semibold my-4">Morning</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mx-2">
        {timePlots.slice(0, 6).map((time, index) => (
          <Time key={index} time={time} index={index} />
        ))}
      </div>

      <h1 className="text-lg font-semibold my-4">Evening</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {timePlots.slice(6, 11).map((time, index) => (
          <Time key={index} time={time} index={index} />
        ))}
      </div>
      <button className="flex justify-center w-4/5 px-4 py-3 my-6 mx-auto cursor-pointer text-white bg-green rounded-lg">
        Book an Appointment
      </button>
    </div>
  );
};
