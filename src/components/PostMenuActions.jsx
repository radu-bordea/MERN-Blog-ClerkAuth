import { BsSave } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const PostMenuActions = () => {
  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <BsSave className="text-2xl" />
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <RiDeleteBin6Line className="text-2xl" />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
