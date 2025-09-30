import Image from "next/image";
import Link from "next/link";
import React from "react";
import Article from "../components/cards/Article";
import client from "../configs/apollo-client";
import { PUBLICATION_QUERY } from "../services/hashnode";

const blog = ({ publications }) => {
  const posts = publications.posts.slice(1);
  const post = publications.posts[0];

  return (
    <div className="p-16 px-24">
      <div className="grid grid-cols-3 gap-8 gap-y-20">
        <Link
          href={{ pathname: `/${post.slug}` }}
          className="col-span-3 grid grid-cols-10 gap-8 text-left w-full"
        >
          <div className="col-span-4 h-[300px] w-full relative shadow shadow-gray-100 rounded-2xl overflow-hidden">
            <Image
              fill
              className="object-cover object-center"
              src={post.coverImage}
              alt="Post cover image"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-between">
            <h3 className="text-2xl text-complementary font-bold">
              {post.title}
            </h3>
            <p className="text-xl text-justify">{post.brief}</p>
            <div className="text-md text-gray-500">
              <span>{post.dateAdded.slice(0, 10)}</span> - <span>Senyone</span>
            </div>
          </div>
        </Link>
        {posts.map((post) => (
          <Article post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default blog;

export async function getServerSideProps(ctx) {
  const response = await client.query({
    query: PUBLICATION_QUERY,
    variables: { username: process.env.NEXT_PUBLIC_BLOG_USERNAME },
  });

  return {
    props: { publications: response.data.user.publication },
  };
}
