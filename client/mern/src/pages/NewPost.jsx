import { useState } from "react";
import { createPost } from "../api/posts";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content, category, image });
      alert("Post created!");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleCreate} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category ID"
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
