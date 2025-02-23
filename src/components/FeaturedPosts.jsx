import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image  */}
        <Image
          path="/macedonia3.jpg"
          alt="Top post"
          className="w-full h-48 md:h-64 lg:h-96 rounded-3xl"
        />
        {/* details  */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-amber-600 lg:text-lg">Favorite Place</Link>
          <span className="text-gray-500">3 days ago</span>
        </div>
        {/* title  */}
        <Link
          to="/test"
          className="text-base lg:text-xl font-semibold lg:font-bold"
        >
          This is my favorite place I have visited recently
        </Link>
      </div>
      {/* Others  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              path="/macedonia4.jpg"
              alt="second post"
              className="rounded-3xl object-cover w-full h-24 sm:h-32 md:h-48 "
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-xs lg:text-base mb-4">
              <h1 className="font-light">02.</h1>
              <Link className="text-amber-600">Last Trip</Link>
              <span className="text-gray-500 text-">2 months ago</span>
            </div>
            {/* title  */}
            <Link to="/test" className="text-sm md:text-base font-medium">
              Enjoy the city - Skopje
            </Link>
          </div>
        </div>

        {/* third  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              path="/macedonia1.jpg"
              alt="second post"
              className="rounded-3xl object-cover w-full h-24 sm:h-32 md:h-48 "
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-xs lg:text-base mb-4">
              <h1 className="font-light">02.</h1>
              <Link className="text-amber-600">Amazing City Tour</Link>
              <span className="text-gray-500 text-"> 5 weeks ago</span>
            </div>
            {/* title  */}
            <Link to="/test" className="text-sm md:text-base font-medium">
              New Year 2005 - couple trip in Macedonia, hotel, food, lake trip,
              city tour.
            </Link>
          </div>
        </div>

        {/* forth  */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              path="/macedonia5.jpg"
              alt="second post"
              className="rounded-3xl object-cover w-full h-24 sm:h-32 md:h-48 "
            />
          </div>
          {/* details and title  */}
          <div className="w-2/3">
            {/* details  */}
            <div className="flex items-center gap-4 text-xs lg:text-base mb-4">
              <h1 className="font-light">02.</h1>
              <Link className="text-amber-600">Lake trip</Link>
              <span className="text-gray-500 text-">2 days ago</span>
            </div>
            {/* title  */}
            <Link to="/test" className="text-sm md:text-base font-medium">
              Beautiful sunny lake trip at Ohrid - Macedonia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
