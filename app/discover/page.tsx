"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  Settings,
  Heart,
  MessageCircle,
  Repeat,
  Share,
  Menu,
  X,
} from "lucide-react";

const CryptoTwitterLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Explore" },
    { icon: Bell, label: "Notifications" },
    { icon: Mail, label: "Messages" },
    { icon: Bookmark, label: "Bookmarks" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];

  const feedItems = [
    {
      id: 1,
      username: "CryptoVisionary",
      handle: "@future_of_finance",
      avatar: "/bboy.avif",
      content:
        "Just launched our new DeFi protocol! Check it out and let me know what you think. #DeFi #Crypto",
      image: "/monke.avif",
      likes: 128,
      comments: 32,
      reposts: 18,
    },
    {
      id: 2,
      username: "BlockchainDev",
      handle: "@code_on_chain",
      avatar: "/bboy.avif",
      content:
        "Excited to announce our upcoming hackathon focused on building sustainable blockchain solutions. Join us! #GreenBlockchain",
      image: "/monke.avif",
      likes: 256,
      comments: 64,
      reposts: 89,
    },
  ];

  const trendingTopics = [
    { topic: "#Ethereum2.0", posts: "452K" },
    { topic: "#DeFiSummer", posts: "129K" },
    { topic: "#NFTArt", posts: "98K" },
    { topic: "#CryptoRegulation", posts: "76K" },
    { topic: "#MetaverseToken", posts: "45K" },
  ];

  const whoToFollow = [
    {
      username: "CryptoInfluencer",
      handle: "@crypto_tips",
      avatar: "/bboy.avif",
    },
    {
      username: "BlockchainNews",
      handle: "@chain_updates",
      avatar: "/monke.avif",
    },
    {
      username: "DeFiGuru",
      handle: "@defi_master",
      avatar: "/bboy.avif",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Mobile Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-20 right-6 left-auto z-50 p-2 bg-white dark:bg-neutral-800 rounded-full shadow-lg"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Left Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 p-4 z-40 overflow-y-auto`}
        >
          <div className="flex flex-col space-y-4 mt-16 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">CryptoFund</h1>
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-4 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition duration-200"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-x border-neutral-200 dark:border-neutral-700">
          <div className="sticky top-0 bg-white dark:bg-neutral-900 z-10 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="text-xl font-bold p-4">Home</h2>
          </div>
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
            <textarea
              className="w-full p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 resize-none"
              placeholder="What's happening in the crypto world?"
              rows="3"
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                {/* Add icons for media upload, GIF, poll, etc. */}
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200">
                Post
              </button>
            </div>
          </div>
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex space-x-3">
                <img
                  src={item.avatar}
                  alt={item.username}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-1">
                    <h3 className="font-bold">{item.username}</h3>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {item.handle}
                    </span>
                  </div>
                  <p className="mt-1">{item.content}</p>
                  <img
                    src={item.image}
                    alt="Post content"
                    className="mt-3 rounded-2xl w-full"
                  />
                  <div className="flex justify-between mt-3">
                    <button className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400">
                      <MessageCircle className="w-5 h-5" />
                      <span>{item.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-green-500 dark:hover:text-green-400">
                      <Repeat className="w-5 h-5" />
                      <span>{item.reposts}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400">
                      <Heart className="w-5 h-5" />
                      <span>{item.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-4 space-y-4 hidden lg:block sticky top-0 h-screen overflow-y-auto">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4">
            <h2 className="font-bold text-xl mb-4">Trending in Crypto</h2>
            {trendingTopics.map((topic, index) => (
              <div key={index} className="mb-3">
                <p className="font-bold">{topic.topic}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {topic.posts} posts
                </p>
              </div>
            ))}
            <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-2">
              Show more
            </button>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4">
            <h2 className="font-bold text-xl mb-4">Who to follow</h2>
            {whoToFollow.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-3"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{user.username}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {user.handle}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-1 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition duration-200">
                  Follow
                </button>
              </div>
            ))}
            <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-2">
              Show more
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CryptoTwitterLayout;
