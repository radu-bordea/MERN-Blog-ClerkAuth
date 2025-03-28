import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links  */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-amber-600 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=lifestyle"
          className="hover:bg-amber-50 rounded-full px-4 py-2"
        >
          Lifestyle
        </Link>
        <Link
          to="/posts?cat=calatorii"
          className="hover:bg-amber-50 rounded-full px-4 py-2"
        >
          Calatorii
        </Link>
        <Link
          to="/posts?cat=literatura"
          className="hover:bg-amber-50 rounded-full px-4 py-2"
        >
          Literatura
        </Link>
        <Link
          to="/posts?cat=cinema"
          className="hover:bg-amber-50 rounded-full px-4 py-2"
        >
          Cinema
        </Link>
        <Link
          to="/posts?cat=colaboreaza"
          className="hover:bg-amber-50 rounded-full px-4 py-2"
        >
          Colaboreaza cu mine
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search  */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-8">
        <IoSearch className="text-amber-600 text-xl" />
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
