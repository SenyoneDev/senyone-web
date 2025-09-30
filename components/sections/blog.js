import React, { useState } from "react";
import Article from "../cards/Article";
import { useQuery } from "@apollo/client";
import { PUBLICATION_QUERY } from "../../services/hashnode";
import Link from "next/link";

const Blog = () => {
  const blogUsername = process.env.NEXT_PUBLIC_BLOG_USERNAME;
  return (
    <section
      id="blog"
      className="flex flex-col items-center gap-6 py-16 text-center"
    >
      <h2 className="text-complementary font-bold">Blog</h2>
      <p className="md:w-[50%] w-[80%] font-semibold">
        Consultez nos derniers articles de blog relatifs aux technologies et
        innovations en automatisation et Intelligence Artificielle.
      </p>
      <Articles username={blogUsername} />
    </section>
  );
};

export default Blog;

const Articles = ({ username }) => {
  const { loading, error, data } = useQuery(PUBLICATION_QUERY, {
    variables: { username: username },
  });

  if (loading) return <div>loading...</div>;

  if (data) {
    const publication = data.user.publication;
    const posts = publication ? publication.posts.slice(0, 3) : [];
    return (
      <>
        <div className="grid md:grid-cols-3 gap-8 w-fit mx-auto mb-10">
          {posts.map((post) => (
            <Article post={post} key={post.slug} />
          ))}
        </div>
        <Link href={"/blog"} className="text-sm">
          <Button value={"voir plus"} />
        </Link>
      </>
    );
  }
};

const Button = ({ value }) => (
  <button className="w-fit p-4 py-2 border-2 border-primary text-primary font-bold rounded-full capitalize hover:shadow-lg">
    {value}
  </button>
);
