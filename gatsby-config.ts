import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Aurora Code`,
    siteUrl: `https://auroracode.io`,
    description: `Our tailored software solutions can help you bring your business to the next level`,
    image: `/images/aurora-og.jpg`,
    twitterUsername: `@auroracode`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    /**
     * Tawk (tawk.to) live chat widget.
     * https://www.gatsbyjs.com/plugins/gatsby-plugin-tawk.to/
     */
    {
      resolve: "gatsby-plugin-tawk.to",
      options: {
        // Keys that go into Tawk chat widget embedding script
        tawkId: "6405de1831ebfa0fe7f0f2df",
        tawkKey: "1gqren4dv",
      },
    },
  ],
};

export default config;
