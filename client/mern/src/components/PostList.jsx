export default function PostList({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 rounded shadow">
          {post.imageUrl && (
            <img
              src={`http://localhost:5000${post.imageUrl}`}
              alt={post.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
