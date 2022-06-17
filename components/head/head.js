import React from "react";
import Head from "next/head";

export const HeadComponent = ({
  title,
  desc,
  ogImage,
  ogType,
  ogTitle,
  ogDesc,
}) => (
  <Head>
    <title>{title || "George for hire."}</title>
    <meta
      name="description"
      content={desc || "A Front-end dev looking for a job."}
    ></meta>
    <meta property="og:image" content={ogImage || "/images/me.jpg"}></meta>
    <meta property="og:type" content={ogType || "website"} />
    <meta property="og:title" content={ogTitle || "George for hire."} />
    <meta
      property="og:description"
      content={ogDesc || "A Front-end dev looking for a job."}
    />
    <link rel="icon" href="/favicon.ico"></link>
  </Head>
);
