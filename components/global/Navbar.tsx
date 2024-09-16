"use client";
import React from "react";
import WalletConnection from "../adapterUi/WalletConnection";
import { ModeToggle } from "./toggle-mode";
import { useRouter } from "next/navigation";
import { NavbarItems } from "./Navbar/NavbarItems";
import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, UserPlus } from "lucide-react";

export function Navbar() {
  const router = useRouter();

  const AvatarMenu = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-56 rounded-xl dark:bg-neutral-800 mt-4">
        <div className="grid gap-4">
          <div className="flex flex-row items-center justify-center gap-8 mb-4 mt-2">
            <WalletConnection />
            <ModeToggle />
          </div>
          <button
            className="flex items-center gap-2 justify-center flex-row text-sm font-medium bg-gradient-to-tr from-green-400 to-green-700 rounded-lg py-1 text-white hover:bg-gradient-to-b hover:from-green-500 hover:to-green-800 hover:text-gray-700"
            onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}
          >
            <UserPlus className="h-4 w-4" />
            Sign in
          </button>
          <button
            className="flex items-center gap-2 justify-center flex-row text-sm font-medium bg-gradient-to-tr from-red-500 to-red-700 rounded-lg py-1 text-white hover:bg-gradient-to-b hover:from-red-500 hover:to-red-800 hover:text-gray-700"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 lg:px-32 xl:px-60 py-4">
      <nav className=" bg-gray-100 dark:bg-neutral-800 backdrop-blur-sm rounded-xl shadow-lg ">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-700 lg:text-3xl dark:bg-gradient-to-b dark:from-white dark:to-gray-700 cursor-pointer"
                onClick={() => router.push("/")}
              >
                ChaosCrowd
              </div>
              <div className="hidden md:block ml-6">
                <NavbarItems label="ChaosCrowd" />
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex items-center space-x-4">
              <AvatarMenu />
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
              <AvatarMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
