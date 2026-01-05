import {  getBlogsByType } from "@/lib/blogs";

export default function BooksPage() {
  const blogs = getBlogsByType("book");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 uppercase">{blog.type}</p>
            <h2 className="text-xl font-semibold mt-1 mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
