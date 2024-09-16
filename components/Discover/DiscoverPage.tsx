"use client";

import React, { useEffect, useState } from "react";
import { FundraiserCard } from "./FundRaiser";
import { SkeletonLoader } from "./SkeletonLoader";
import { SortingComponent } from "./Sorting";

const DiscoverPage = () => {
  const [fundraisers, setFundraisers] = useState<
    {
      title: string;
      description: string;
      raised: number;
      goal: number;
      niche: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [selectedNiche, setSelectedNiche] = useState("all");

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setFundraisers([
        {
          title: "Digital Literacy Program",
          description: "Empowering communities through technology education.",
          raised: 500,
          goal: 500,
          niche: "education",
        },
        {
          title: "Reforestation Initiative",
          description: "Planting trees to combat climate change.",
          raised: 300,
          goal: 1000,
          niche: "environment",
        },
        {
          title: "Healthcare for All",
          description: "Providing medical services to underserved areas.",
          raised: 750,
          goal: 2000,
          niche: "healthcare",
        },
        {
          title: "Blockchain for Good",
          description: "Leveraging blockchain for social impact.",
          raised: 500,
          goal: 1500,
          niche: "technology",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredFundraisers =
    selectedNiche === "all"
      ? fundraisers
      : fundraisers.filter((f) => f.niche === selectedNiche);

  return (
    <div className=" px-8 md:px-16 lg:px-20 xl:px-36 mt-36 mb-12 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent font-bold bg-gradient-to-tr from-black to-slate-800 dark:bg-gradient-to-tr dark:from-white dark:to-slate-200 dark:text-white mb-6">
        Find Your Charity
      </h2>
      <SortingComponent onSortChange={setSelectedNiche} />
      {loading ? (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : (
        filteredFundraisers.map((fundraiser, index) => (
          <FundraiserCard key={index} {...fundraiser} />
        ))
      )}
    </div>
  );
};

export default DiscoverPage;
