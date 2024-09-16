"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleAuthMode = () => setIsLogin(!isLogin);

  const ThemeToggle = ({
    isDarkMode,
    toggleDarkMode,
  }: {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }) => (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${
        isDarkMode
          ? "bg-neutral-700 hover:bg-neutral-600"
          : "bg-neutral-200 hover:bg-neutral-300"
      }`}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-grid-pattern ${
        isDarkMode ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md p-8 rounded-lg shadow-lg ${
          isDarkMode ? "bg-neutral-800" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">ChaosCrowd</h1>
          <ThemeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Welcome Back" : "Join ChaosCrowd"}
        </h2>

        {isLogin ? (
          <LoginForm isDarkMode={isDarkMode} />
        ) : (
          <SignupForm isDarkMode={isDarkMode} />
        )}

        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleAuthMode}
            className="ml-1 font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
