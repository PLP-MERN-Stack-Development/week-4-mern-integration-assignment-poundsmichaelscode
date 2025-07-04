import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
