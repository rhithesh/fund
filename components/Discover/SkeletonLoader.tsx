import React from "react";

export const SkeletonLoader = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 mb-4 border border-gray-200 dark:border-gray-800">
      <div className="h-6 bg-gray-200 dark:bg-neutral-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-neutral-600 rounded w-full mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-neutral-600 rounded w-full mb-2"></div>
      <div className="h-2 bg-gray-200 dark:bg-neutral-600 rounded-full w-full mb-4"></div>
      <div className="flex justify-between">
        <div className="h-6 bg-gray-200 dark:bg-neutral-600 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-neutral-600 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 dark:bg-neutral-600 rounded w-1/4"></div>
      </div>
    </div>
  );
};
