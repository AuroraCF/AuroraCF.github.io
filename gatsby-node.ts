import { GatsbyNode } from "gatsby";
import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import axios from "axios";

const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  // Case studies
  const caseStudyYMLDoc = yaml.load(
    fs.readFileSync("./content/case-studies.yml", "utf-8")
  );

  const caseStudyTemplate = path.resolve("./src/templates/caseStudy.tsx");
  (caseStudyYMLDoc as object[]).forEach((element: any) => {
    createPage({
      path: element.path,
      component: caseStudyTemplate,
      context: {
        title: element.title,
        description: element.description,
        logo: element.logo,
        technologies: element.technologies,
        headline: element.headline,
        blocks: element.blocks,
      },
    });
  });

  // Industries
  const industriesYMLDoc = yaml.load(
    fs.readFileSync("./content/industries.yml", "utf-8")
  );

  const industryTemplate = path.resolve("./src/templates/industry.tsx");
  (industriesYMLDoc as object[]).forEach((element: any) => {
    createPage({
      path: element.path,
      component: industryTemplate,
      context: {
        title: element.title,
        description: element.description,
        headline: element.headline,
        content: element.content,
        image: element.image,
        caseStudies: element.caseStudies,
      },
    });
  });
};

const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Articles
  const articlesRequest = await axios(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aurora-code"
  );
  const articles = articlesRequest.data.items;

  articles.forEach((article: any) => {
    const trimmedWord = article.description
      .replace(/<[^>]+>/g, "")
      .trim()
      .slice(0, 130);
    createNode({
      ...article,
      description:
        trimmedWord.substr(
          0,
          Math.min(trimmedWord.length, trimmedWord.lastIndexOf(" "))
        ) + "...",
      id: createNodeId(`Article-${article.guid}`),
      parent: null,
      children: [],
      internal: {
        type: "Article",
        contentDigest: createContentDigest(article),
      },
    });
  });

  // Case studies
  const caseStudyYMLDoc = yaml.load(
    fs.readFileSync("./content/case-studies.yml", "utf-8")
  );

  (caseStudyYMLDoc as object[]).forEach((element: any) => {
    createNode({
      ...element,
      id: createNodeId(`CaseStudy-${element.caseStudyId}`),
      parent: null,
      children: [],
      internal: {
        type: "CaseStudy",
        contentDigest: createContentDigest(element),
      },
    });
  });
};

exports.createPages = createPages;
exports.sourceNodes = sourceNodes;
