import { GraduationCap, MessageSquareText, Pill } from "lucide-react";

export const DoctorCard = ({ item }) => {
  return (
    <div className="bg-card rounded-xl h-auto flex flex-col shadow-md items-center gap-6 justify-center p-4 x border border-grey">
      <img src={item.dp} alt="dp" className="w-20 h-20 rounded-full" />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{item.name}</h1>
        <p className="flex items-center gap-1 text-gray-400 text-lg">
          {" "}
          <Pill className="text-green" />
          {item.post}
        </p>
        <p className="flex items-center gap-1 text-gray-400 text-lg">
          <GraduationCap className="text-green" />
          {item.experience}
        </p>
        <p className="flex items-center gap-1 text-gray-400 text-lg">
          <MessageSquareText className="text-green" />
          {item.lang}
        </p>
      </div>
      <div className="flex gap-4">
        <div className=" gap-1 border border-grey cursor-pointer rounded-xl p-1">
          <h1 className="font-medium text-sm">Video Consultation</h1>
          <p className="text-green flex justify-center font-semibold">₹800</p>
        </div>
        <div className=" gap-1 border border-grey cursor-pointer rounded-xl p-1">
          <h1 className="font-medium">Chat Consultation</h1>
          <p className="text-green flex justify-center font-semibold">Free</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 w-full mt-4">
        <button className="px-4 py-2 text-green font-medium bg-background border border-green cursor-pointer rounded-md">
          View Profile
        </button>
        <button className="px-4 py-2  cursor-pointer text-white bg-green rounded-md">
          Book an consultation
        </button>
      </div>
    </div>
  );
};
