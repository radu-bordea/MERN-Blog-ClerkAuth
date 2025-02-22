import React from "react";
import { Link } from "react-router-dom";
import { FaFeatherAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-amber-600">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles   */}
        <div className="">
          <h1 className="text-gray-500 text-2xl md:text-5xl lg:text-6xl font-bold">
            Adventurous Journeys: A Life of Travel
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Exploring the world together, they embrace new cultures, enjoy happy
            vacations, and create unforgettable memories while living life to
            the fullest.
          </p>
        </div>
        {/* animated button  */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center">
            <FaFeatherAlt className="w-8 h-8 " />
          </button>
        </Link>
      </div>
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  );
};

export default HomePage;
