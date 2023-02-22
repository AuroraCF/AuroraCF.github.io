import { graphql, useStaticQuery } from "gatsby";

interface CaseStudy {
  path: string;
  caseStudyId: string;
  productName: string;
  productDescription: string;
  title: string;
  description: string;
  headline: string;
  content: string;
  logo: string;
  technologies: string[];
}

export const useCaseStudies = () => {
  const data = useStaticQuery(graphql`
    query {
      allCaseStudy {
        nodes {
          path
          caseStudyId
          productName
          productDescription
          title
          description
          headline
          logo
          technologies
        }
      }
    }
  `);

  return data.allCaseStudy.nodes as CaseStudy[];
};
