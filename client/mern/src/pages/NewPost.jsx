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
      const newPost = await createPost({ title, content, category, image });
      console.log("Created post:", newPost);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category ID" />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Create Post</button>
    </form>
  );
}
