import Image from "next/image";
import Link from "next/link";
import React from "react";

const Article = ({ post }) => {
  return (
    <Link
      href={{ pathname: `/${post.slug}` }}
      className="grid gap-3 text-left w-[300px]"
    >
      <div className="h-[180px] w-full relative shadow shadow-gray-100 rounded-2xl overflow-hidden">
        <Image
          fill
          className="object-cover object-center"
          src={post.coverImage}
          alt="Post cover image"
        />
      </div>
      <h3 className="text-md text-complementary font-semibold">{post.title}</h3>
      <p className="text-sm text-justify">{post.brief}</p>
      <div className="text-xs text-gray-500">
        <span>{post.dateAdded.slice(0, 10)}</span> - <span>Senyone</span>
      </div>
    </Link>
  );
};

export default Article;
