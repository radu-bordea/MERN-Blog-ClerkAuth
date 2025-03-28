import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image  */}
      <div className="md:hidden xl:w-1/3"></div>
      <Image
        path="/macedonia3.jpg"
        alt="Top post"
        className="md:hidden lg:block rounded-2xl object-cover w-full h-48 md:h-96 lg:h-64 xl:h-96"
      />
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          accusamus.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to="/test">
            Joh Doe
          </Link>
          <span>on</span>
          <Link className="text-blue-800">Trveling</Link>
          <span>2 days ago</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          ipsam, dignissimos nobis sequi distinctio sapiente odit assumenda
          aperiam expedita temporibus in maxime cum cupiditate porro. Ab
          voluptatum perspiciatis fuga, ipsum soluta harum velit maxime quaerat
          totam accusamus, adipisci omnis ipsa!
        </p>
        <Link to="/test" className="underline text-gray-800 text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
