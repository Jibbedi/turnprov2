import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Overview from "../components/Overview";

export default ({ data }) => {
  const {
    allMarkdownRemark: { edges: articles }
  } = data;

  const categories = Array.from(
    new Set(articles.map(({ node }) => node.frontmatter.category))
  );

  return (
    <>
      <SEO title={"Overview"} />
      <Overview articles={articles} categories={categories} />
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            level
          }
          fields {
            path
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
