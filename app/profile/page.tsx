"use client";

import React, { useState } from "react";
import { Moon, Sun, Github, Twitter, Linkedin, DollarSign } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`min-h-screen  pt-28 transition-colors duration-300 ease-in-out ${
        darkMode ? "dark bg-neutral-900" : "bg-neutral-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-colors duration-300 ease-in-out z-50"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-white" />
          )}
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 filter blur-3xl opacity-20 dark:opacity-30"></div>
            <Image
              src={"/bboy.avif"}
              alt="Profile"
              width={1920}
              height={1080}
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-neutral-300 dark:border-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 relative z-10"
            />
            <h1 className="text-5xl font-bold mb-3 text-neutral-800 dark:text-neutral-100">
              CryptoFund
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              Decentralized Crowdfunding Platform
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:shadow-purple-400/30 filter  dark:shadow-lg dark:bg-neutral-800 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400 to-purple-500 opacity-10 dark:opacity-20 transform rotate-45 translate-x-20 -translate-y-20"></div>
              <h2 className="text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">
                About CryptoFund
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                CryptoFund is a cutting-edge Web3 crowdfunding and donation
                platform that leverages blockchain technology to create a
                transparent, secure, and efficient ecosystem for fundraisers and
                donors alike. Our mission is to democratize access to capital
                and support innovative projects across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white  dark:shadow-purple-300/30 filter  dark:shadow-lg dark:bg-neutral-800 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                  Key Features
                </h2>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-500" />{" "}
                    Instant global transactions
                  </li>
                  <li className="flex items-center">Multi-chain support</li>
                  <li className="flex items-center">
                    🔒 Smart contract security
                  </li>
                  <li className="flex items-center">
                    🌐 Decentralized governance
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg  dark:shadow-purple-300/30 filter  dark:shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                  Platform Stats
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Total Raised", value: "$10M+" },
                    { label: "Active Campaigns", value: "500+" },
                    { label: "Global Reach", value: "100+ countries" },
                    { label: "Community Members", value: "50,000+" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                        {stat.value}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-8  dark:shadow-purple-500/30 filter mb-24 dark:shadow-lg rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-neutral-800 dark:text-neutral-100">
                Connect With Us
              </h2>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
