import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Overview from "../components/Overview";

export default ({ data, pageContext }) => {
  const {
    allMarkdownRemark: { edges: articles },
    categories: { edges: allCategories }
  } = data;

  const categories = Array.from(
    new Set(allCategories.map(({ node }) => node.frontmatter.category))
  );

  return (
    <>
      <SEO
        title={
          pageContext.category
            ? `Category: ${pageContext.category}`
            : "Overview"
        }
      />
      <Overview
        articles={articles}
        categories={categories}
        activeCategory={pageContext.category}
      />
    </>
  );
};

export const query = graphql`
  query CategoryQuery($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
    categories: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`;
