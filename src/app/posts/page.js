import { fetchData } from "@/utils/fetchData";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="mt-12 mx-16">
      <h2 className="text-3xl text-center font-bold text-emerald-500">
        Post Count: {posts?.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
        {posts.map((post) => (
          <div
            key={post?.id}
            className="border border-violet-800 p-4 rounded-md"
          >
            <h3 className="text-violet-800 text-xl font-semibold">
              {post?.title}
            </h3>
            <p className="mt-3 text-justify">{post?.body}</p>
            <Link
              href={`/posts/${post?.id}`}
              className="mt-6 bg-violet-800 inline-block text-white px-4 py-2 rounded-md"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
