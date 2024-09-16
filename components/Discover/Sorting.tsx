import { Filter } from "lucide-react";
import React from "react";

export const SortingComponent = ({
  onSortChange,
}: {
  onSortChange: (value: string) => void;
}) => {
  return (
    <div className="mb-4 flex items-center">
      <Filter className="h-5 w-5 text-black dark:text-neutral-500 mr-2" />
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-white dark:bg-black text-black dark:text-neutral-400 border border-gray-300 dark:border-neutral-700 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      >
        <option value="all">All Niches</option>
        <option value="education">Education</option>
        <option value="environment">Environment</option>
        <option value="healthcare">Healthcare</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  );
};
