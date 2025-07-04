import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        MERN Blog
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/new-post" className="hover:underline">New Post</Link>
      </div>
    </nav>
  );
}
