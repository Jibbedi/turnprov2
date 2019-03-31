import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../ui/Layout";
import PostInfo from "../ui/PostInfo";
import { BackButton } from "../ui/Button";
import SEO from "../components/SEO";
import NewsLetterWell from "../components/NewsLetterWell";
import Bio from "../components/Bio";
import ArticleSummary from "../components/ArticleOverview";
import CategoryPanel from "../components/CategoryPanel";
import GraphQlEbookPromo from "../components/GraphQLEbookPromo";

require("prismjs/themes/prism-tomorrow.css");

const BlogPostWrapper = styled.div`
  border-top: 6px solid var(--accentTextColor);
  padding-top: 70px;
  background: white;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 45em 1fr;

  @media (max-width: 1440px) {
    grid-template-columns: minmax(100%, 45em);
    grid-gap: 20px;
    padding: 20px;
  }
`;

const PostBody = styled.article`
  text-align: justify;
  padding-bottom: 60px;

  img {
    margin: 40px 0;
  }

  .gatsby-highlight {
    margin: 40px -60px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1440px) {
    .gatsby-highlight {
      margin: 0;
      width: 100%;
    }
  }

  pre {
    border-radius: 8px;
  }

  code[class*="language-text"] {
    padding: 5px;
    color: var(--accentTextColor);
  }

  blockquote {
    border-left: 5px solid var(--accentTextColor);
    margin-left: 0px;
    padding-left: 10px;
  }

  cite {
    display: block;
    font-size: 0.8rem;

    &:before {
      content: ">";
      color: var(--accentTextColor);
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .highlight {
    padding: 20px;
    border-top: 8px solid var(--accentTextColor);
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--accentTextColor);
  }

  strong,
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
    color: var(--titleTextColor);
  }

  h2,
  h3 {
    margin-top: 3rem;
    margin-bottom: 1.3rem;
  }

  h3 {
    font-size: 1.1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: var(--titleTextColor);
`;

const BackButtonWrapper = styled.div`
  justify-self: flex-end;
  padding-top: 10px;

  @media (max-width: 1440px) {
    justify-self: flex-start;
    padding-top: 0px;
    padding-left: 10px;
  }
`;

const BioWrapper = styled.div`
  margin: 40px 0;
`;

const RelatedContentWrapper = styled.div`
  width: 45em;
  margin: 50px auto;

  @media (max-width: 1440px) {
    max-width: 800px;
    width: 100%;
    padding: 10px 20px;
  }
`;

const SourceCodeLinkWrapper = styled.div`
  margin: 20px 0;
  margin-top: -20px;
`;

const RelatedArticles = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const Categories = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: 100px;
  grid-auto-rows: 100px;
  padding: 10px 0;
`;

const PromoWrapper = styled.div`
  margin: 30px 0px;
`;

const BlogPost = ({ data }) => {
  const { markdownRemark: post, related, categories } = data;

  const allCategories = Array.from(
    new Set(categories.edges.map(({ node }) => node.frontmatter.category))
  );

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        keywords={post.frontmatter.tags}
      />
      <BlogPostWrapper>
        <BackButtonWrapper>
          <BackButton to="/">Home</BackButton>
        </BackButtonWrapper>
        <div>
          <Title>{post.frontmatter.title}</Title>
          <PostInfo timeToRead={post.timeToRead} date={post.frontmatter.date} />
          <BioWrapper>
            <Bio />
          </BioWrapper>
          {post.frontmatter.github && (
            <SourceCodeLinkWrapper>
              <a href={post.frontmatter.github}>Source code available</a>
            </SourceCodeLinkWrapper>
          )}
          <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.ebook && (
            <PromoWrapper>
              <GraphQlEbookPromo />
            </PromoWrapper>
          )}
        </div>
      </BlogPostWrapper>
      <NewsLetterWell />
      <RelatedContentWrapper>
        <h2>You might also like.</h2>
        {related && (
          <RelatedArticles>
            {related.edges.map(relatedArticle => (
              <ArticleSummary
                key={relatedArticle.node.frontmatter.title}
                article={relatedArticle.node}
              />
            ))}
          </RelatedArticles>
        )}
        <Categories>
          {allCategories.map(category => (
            <CategoryPanel
              key={category}
              to={`/${category.toLowerCase()}`}
              src={require(`../../assets/${category.toLowerCase()}.svg`)}
            />
          ))}
        </Categories>
      </RelatedContentWrapper>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($path: String!, $title: String!, $category: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        tags
        title
        category
        ebook
        github
        date(formatString: "MMMM DD, YYYY")
      }
    }
    related: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: {
        frontmatter: { category: { eq: $category }, title: { ne: $title } }
      }
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
