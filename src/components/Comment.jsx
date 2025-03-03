import React from "react";
import Image from "./Image";

export default function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image path="./userImg.jpeg" className="2-10 h-10 rounded-full object-cover" w="40" />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel enim
          laudantium maxime perspiciatis est iste nostrum suscipit impedit
          ipsum, earum quis possimus nobis velit natus dolorem! Est, quis id.
        </p>
      </div>
    </div>
  );
}
