import Image from "next/image";
import React from "react";
import NewsletterPopup from "../components/NewsletterPopup";
import client from "../configs/apollo-client";
import { POST_QUERY } from "../services/hashnode";
import styles from "../styles/post.module.css";

const Blog = ({ post }) => {
  const [newsletterPopup, setNewsletterPopup] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setNewsletterPopup(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [newsletterPopup]);

  return (
    <>
      {newsletterPopup && (
        <NewsletterPopup closePopup={() => setNewsletterPopup(false)} />
      )}
      <div className="pb-16 lg:px-64">
        <div className="flex w-full h-[35vh] relative">
          <Image
            className="object-cover"
            loading="eager"
            fill
            src={post.coverImage}
            alt={post.title}
          />
        </div>
        <div className="mx-8f text-justify relative">
          <h1 className="text-2xl md:text-4xl font-extrabold my-6 text-center leading-12">
            {post.title}
          </h1>
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <a
            href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://senyone.sn/blog/${post.slug}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-primary text-white font-bold py-2 px-4 rounded">
              Share on Twitter
            </button>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://senyone.sn/blog/${post.slug}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-primary text-white font-bold py-2 px-4 rounded">
              Share on Facebook
            </button>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://senyone.sn/blog/${post.slug}&title=${post.title}&summary=${post.title}&source=Senyone`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-primary text-white font-bold py-2 px-4 rounded">
              Share on LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getServerSideProps(ctx) {
  const { posts } = ctx.query;

  const response = await client.query({
    query: POST_QUERY,
    variables: { slug: posts[0] },
  });

  const postData = response.data.post;

  return {
    props: { post: postData },
  };
}
