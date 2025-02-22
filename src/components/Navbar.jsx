import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-4 text-lg md:text-2xl font-bold"
      >
        <Image
          path="/logo.avif"
          alt="Paraschiv Logo"
          className="w-12 h-12 rounded-full"
          // w={12}
          // h={12}
        />

        <span>Paraschiv family's blog</span>
      </Link>
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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl">Login</button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl">Login</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
