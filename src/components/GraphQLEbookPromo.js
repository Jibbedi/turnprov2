import React from "react";
import styled from "styled-components";
import GatsbyLink from "gatsby-link";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
  width: 200px;
  margin-right: 10px;

  @media (max-width: 740px) {
    width: 100%;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  padding: 10px;
  padding-left: 0;

  @media (max-width: 740px) {
    padding: 10px;
  }
`;

const GraphQlEbookPromo = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Panel>
        <ImageWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
        <TextWrapper>
          <div>
            This was an excerpt of my <b>free</b> ebook TurnPro in GraphQL.
          </div>
          <div>
            Get it <GatsbyLink to="/ebook/graphql/">here</GatsbyLink>.
          </div>
        </TextWrapper>
      </Panel>
    )}
  />
);

export default GraphQlEbookPromo;

export const query = graphql`
  {
    file(relativePath: { eq: "ebook-graphql-cover-3d.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 740) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
