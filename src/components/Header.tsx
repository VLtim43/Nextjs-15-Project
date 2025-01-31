import React from "react";

import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";

import NavButton from "@/components/NavButton";

export const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between 2-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href={"/home"}
            className="flex justify-center items-center gap-2 ml-0"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center"></div>
      </div>
    </header>
  );
};
