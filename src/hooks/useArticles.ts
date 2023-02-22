import { graphql, useStaticQuery } from "gatsby";

interface Post {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
}

export const useArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allArticle {
        nodes {
          id
          title
          thumbnail
          description
          link
        }
      }
    }
  `);

  return data.allArticle.nodes as Post[];
};
