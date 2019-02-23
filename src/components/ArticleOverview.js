import React from "react";
import GatsbyLink from "gatsby-link";
import styled from "styled-components";
import CategoryConfig from "../config/categories";
import PostInfo from "../ui/PostInfo";

const ArticleSummaryWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-left: 8px solid ${props => props.color};

  @media (max-width: 1080px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.7rem;
  color: var(--titleTextColor);
  margin-bottom: 15px;
  width: 60%;
`;

const ArticleCategoryIcon = styled.img`
  --size: 40px;
  width: var(--size);
  height: var(--size);
  object-fit: cover;
  object-position: center center;
  margin: 0;
`;

const AccentText = styled.span`
  &,
  * {
    color: var(--accentTextColor);

    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ArticleInfoContainer = styled.div`
  position: absolute;
  display: grid;
  justify-items: flex-end;
  grid-gap: 15px;
  top: 40px;
  right: 40px;

  @media (max-width: 1080px) {
    top: 20px;
    right: 20px;
  }
`;

const Excerpt = styled.p`
  color: var(--bodyTextColor);
  width: 75%;
`;

const ReadMoreWrapper = styled.span`
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const ArticleSummary = ({ article }) => {
  const config = CategoryConfig[article.frontmatter.category.toLowerCase()];
  return (
    <ArticleSummaryWrapper color={config.mainColor}>
      <ArticleInfoContainer>
        <ArticleCategoryIcon
          src={require(`../../assets/${config.imageName}.svg`)}
        />
        <AccentText>Beginner</AccentText>
      </ArticleInfoContainer>
      <Title>{article.frontmatter.title}</Title>
      <Excerpt>
        {article.excerpt}
        <ReadMoreWrapper>
          <AccentText>
            <GatsbyLink to={article.fields.path}>Read more</GatsbyLink>
          </AccentText>
        </ReadMoreWrapper>
      </Excerpt>
      <PostInfo
        timeToRead={article.timeToRead}
        date={article.frontmatter.date}
      />
    </ArticleSummaryWrapper>
  );
};

export default ArticleSummary;
