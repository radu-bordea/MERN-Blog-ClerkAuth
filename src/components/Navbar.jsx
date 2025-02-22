import React, { useState } from "react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-lg md:text-2xl font-bold">
        <Image
          path="/logo.avif"
          alt="Paraschiv Logo"
          className="w-12 h-12 rounded-full"
          // w={12}
          // h={12}
        />

        <span>Paraschiv family's blog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden p-6">
        {/* MOBILE BUTTON */}
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[%100]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl">Login</button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl">Login</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
