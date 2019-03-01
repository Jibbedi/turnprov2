import ArticleSummary from "./ArticleOverview";
import CategoryPanel from "./CategoryPanel";
import NewsletterSignUp from "./NewsletterSignUp";
import React from "react";
import styled from "styled-components";
import Layout from "../ui/Layout";

const Wrapper = styled.div`
  background: var(--backgroundColor);
  margin-bottom: 20px;
`;

const Header = styled.div`
  background-color: #2c3e50;
  height: 350px;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  display: grid;
  place-items: center;
  font-size: 3rem;
  color: white;
  line-height: 1.1;

  * {
    color: white;
  }

  @media (max-width: 590px) {
    padding: 0 10px;
    font-size: 1.6rem;
    height: 250px;
  }
`;

const Content = styled.div`
  max-width: min-content;
  margin: 0 auto;
  margin-top: -50px;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: 650px 350px;

  @media (max-width: 1080px) {
    max-width: 690px;
    grid-template-columns: 1fr;
    padding-top: 0;
    padding: 20px;
    grid-gap: 40px;
  }
`;

const Articles = styled.main`
  display: grid;
  grid-template-rows: min-content;
  grid-gap: 20px;
`;

const SideMenu = styled.aside`
  margin-top: 70px;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 40px;

  @media (max-width: 1080px) {
    margin-top: 0px;
  }
`;

const SideMenuTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const Categories = styled.div`
  --tileSize: 80px;
  display: grid;
  grid-template-columns: repeat(3, var(--tileSize));
  grid-auto-rows: var(--tileSize);
  grid-gap: 20px;
`;

const NewsletterIntro = styled.div`
  color: var(--titleTextColor);
  margin-bottom: 20px;
`;

const HeaderHighlight = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  color: var(--accentTextColor);
`;

const Overview = ({ articles, categories, activeCategory }) => (
  <Layout>
    <Wrapper>
      <Header>
        <div>
          <div>
            Turn <HeaderHighlight>Pro</HeaderHighlight>
          </div>
          <div style={{ marginLeft: "80px" }}>
            in{" "}
            <HeaderHighlight>{activeCategory || "JavaScript"}</HeaderHighlight>{" "}
            stuff
          </div>
        </div>
      </Header>
      <Content>
        <Articles>
          {articles.map(({ node }) => (
            <ArticleSummary article={node} key={node.frontmatter.title} />
          ))}
        </Articles>
        <SideMenu>
          <div>
            <SideMenuTitle>Categories</SideMenuTitle>
            <Categories>
              {categories.map(category => (
                <CategoryPanel
                  key={category}
                  to={`/${category.toLowerCase()}`}
                  active={activeCategory === category}
                  src={require(`../../assets/${category.toLowerCase()}.svg`)}
                />
              ))}
            </Categories>
          </div>
          <div>
            <SideMenuTitle>Newsletter</SideMenuTitle>
            <NewsletterIntro>
              Yet another mailing list? I feel you. <br /> I’m subscribed to way
              more than I read as well. But if you’re interested in any of the
              topics above, give me a try. You can always use the 90 day money
              back… wait a minute. <br /> It’s free anyways.
            </NewsletterIntro>
            <NewsletterSignUp />
          </div>
        </SideMenu>
      </Content>
    </Wrapper>
  </Layout>
);

export default Overview;
