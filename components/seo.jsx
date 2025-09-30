import Head from "next/head";
import React from "react";

export default function Seo({
  description = "Cabinet de conseil en transformation et innovation​ grâce à l’automatisation",
  author = "SN Genius",
  meta,
  title = "Senyone | Think. Automate. Rework",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <link rel="icon" href="/Logo.svg" />
    </Head>
  );
}

Seo.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
};
