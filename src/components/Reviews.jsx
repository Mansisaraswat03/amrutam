import React from "react";
import { ReviewCard } from "../components";
import { reviewData } from "../data/data";

export const Reviews = () => {
  return (
    <div className="h-auto border border-grey rounded-xl m-7">
      <h1 className="p-6 h-10 flex items-center text-sm font-semibold lg:text-xl bg-bg rounded-t-xl">
        Featured Reviews (102)
      </h1>
      <div className="pt-6 px-8">
        {reviewData.map((item) => (
          <ReviewCard item={item} />
        ))}
      </div>
    </div>
  );
};
