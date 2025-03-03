import { useUser } from "@clerk/clerk-react";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser;

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (!isSignedIn) {
    return <div className="">You should login!</div>;
  }

  return (
    <div className="">
      <h1>Create a New Post</h1>
      <form>
        <button>Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="literatura">Literatura</option>
            <option value="traveling">Traveling</option>
            <option value="tips">Tips</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A short Description"/>
        
      </form>
    </div>
  );
};

export default Write;
