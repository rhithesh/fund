import { Heart, MessageCircle, Share2 } from "lucide-react";
import React from "react";

export const FundraiserCard = ({
  title,
  description,
  raised,
  goal,
  niche,
}: {
  title: string;
  description: string;
  raised: number;
  goal: number;
  niche: string;
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 mb-10 border border-gray-200 dark:border-neutral-600 transition-all duration-300 ease-in-out hover:shadow-lg">
      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-500 md:text-2xl lg:text-3xl xl:text-4xl ] mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-neutral-400 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Raised: {raised} SOL
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Goal: {goal} SOL
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-neutral-600 rounded-full h-2.5">
        <div
          className="bg-black dark:bg-white h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(raised / goal) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
          <Heart className="h-5 w-5" />
          <span>Support</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200">
          <MessageCircle className="h-5 w-5" />
          <span>Comment</span>
        </button>
      </div>
      <div className="mt-2 inline-block bg-gray-200 dark:bg-white  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800">
        {niche}
      </div>
    </div>
  );
};
