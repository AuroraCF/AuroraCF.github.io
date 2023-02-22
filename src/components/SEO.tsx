import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${defaultTitle} - ${title}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content="software development, custom software, business growth, web development, web development company, mobile development, mobile development company, web3 development, blockchain development, AI development, software consulting, software agency, web development team, software development team, web application, remote software development agency, startup development, startup web development, startup mobile development, javascript development, JS development, react development, node.js development, next.js development, react native development, product development, remote product development, aurora, aurora code"
      />
      <meta name="author" content="Aurora Code" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      {/* LogRocket */}
      <script
        src="https://cdn.lr-in-prod.com/LogRocket.min.js"
        crossOrigin="anonymous"
      ></script>
      <script>
        window.LogRocket &&
        window.LogRocket.init("sry39u/aurora-code-homepage");
      </script>

      {children}
    </>
  );
};
