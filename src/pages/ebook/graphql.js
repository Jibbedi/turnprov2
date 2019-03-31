import React from "react";
import styled from "styled-components";
import SEO from "../../components/SEO";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NewsletterWell from "../../components/NewsLetterWell";
import Tick from "../../../assets/tick.svg";
import GatsbyLink from "gatsby-link";

const Wrapper = styled.div`
  width: 100vw;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const ChapterOverview = styled.div`
  padding: 50px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Chapters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const TickContainer = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const Title = styled.h1`
  color: #cb165b;
`;

const Highlight = styled.span`
  font-weight: bold;
`;

const Step = styled.h3`
  display: flex;
  align-items: center;
  color: #cb165b;
  margin-bottom: 10px;
`;

const Center = styled.div`
  text-align: center;
`;

export default ({ data }) => {
  return (
    <>
      <Wrapper>
        <SEO title={"TurnPro in GraphQL | Ebook"} />
        <div>
          <Title>Free Ebook - Turn Pro in GraphQL</Title>
          <p>
            Take the journey to become a pro in GraphQL. We'll be working
            fullstack. <Highlight>React</Highlight> for the frontend. And{" "}
            <Highlight>Node.js</Highlight> on the backend.
          </p>
          <p>
            <Step>
              <TickContainer src={Tick} />
              Beginner
            </Step>
            We'll start with the basics and understand why we need GraphQL in
            the first place. Then we'll take a deep dive into every piece of
            this new technology. We'll cover the{" "}
            <Highlight>type system and schema</Highlight> and understand when to
            use <Highlight>queries and mutations</Highlight> and how to access
            our data using <Highlight>resolvers</Highlight>.
          </p>
          <p>
            <Step>
              <TickContainer src={Tick} /> Intermediate
            </Step>
            <div>
              When we understand the basics it's time to up our game and
              leverage the power of GraphQL. We'll cover advanced concepts like{" "}
              <Highlight>directives</Highlight> and{" "}
              <Highlight>custom scalar types</Highlight>. We'll learn how to use
              GraphQL in front of our <Highlight>REST APIs</Highlight> and see
              how we can <Highlight>generate TypeScript</Highlight> typings.
              We'll take a look into how to handle things like{" "}
              <Highlight>filtering and pagination</Highlight> and leverage the
              power of <Highlight>subscriptions</Highlight> to make our
              application real-time.
            </div>
          </p>
          <p>
            <Step>
              <TickContainer src={Tick} /> Pro
            </Step>
            <div>
              Finally, it's time to become production ready. We'll talk about{" "}
              <Highlight>testing</Highlight>. We'll learn how to properly do{" "}
              <Highlight>versioning</Highlight> and how to leverage{" "}
              <Highlight>monitoring</Highlight> to do so. We'll understand how
              to improve performance by using{" "}
              <Highlight>persisted queries and deferring</Highlight>. When we're
              done - we'll have a production-ready <Highlight>Docker</Highlight>{" "}
              container - ready to be shipped.
            </div>
          </p>

          <p>
            <Step>
              <TickContainer src={Tick} /> Free? Where's the catch?
            </Step>
            <div>
              Don't worry. I won't sell your email address or do something fishy
              like that. I'm trying to make a bit of a name for myself when it
              comes to teaching and I figured the best way to do it was to put
              out quality content for free. Maybe I'll send you information
              about other stuff I created in the future. If you like it - cool.
              If not - just ignore it or unsubscribe at any time.{" "}
              <Highlight>No strings attached.</Highlight>
            </div>
          </p>
        </div>
        <div>
          <Img
            alt="Turn Pro in GraphQL. Ebook by Johannes Kling"
            fluid={data.file.childImageSharp.fluid}
          />
        </div>
      </Wrapper>
      <NewsletterWell
        color={"#cb165b"}
        text={
          "This book is currently being written. I'll be sending you each new chapter and once the book is done I'll send you the whole ebook as a PDF. 100% free."
        }
      />
      <ChapterOverview>
        <Title>Chapter Overview</Title>
        <Chapters>
          <div>
            <Step>Beginner</Step>
            <div>Introduction</div>
            <div>What is GraphQL?</div>
            <div>Why GraphQL?</div>
            <div>Playground explained</div>
            <div>Type System</div>
            <div>Queries</div>
            <div>Schema</div>
            <div>Mutation</div>
            <div>Resolvers</div>
          </div>
          <div>
            <Step>Intermediate</Step>
            <div>Filtering</div>
            <div>Pagination</div>
            <div>Custom Scalar Types</div>
            <div>Directives</div>
            <div>Fragments</div>
            <div>Generating TypeScript</div>
            <div>Advanced Types (Union & Interfaces)</div>
            <div>Error Handling</div>
            <div>Caching with Data Loader</div>
            <div>Subscriptions</div>
          </div>
          <div>
            <Step>Pro</Step>
            <div>Dockerize GraphQL</div>
            <div>Persisted Queries</div>
            <div>Schema Stitching</div>
            <div>Serverless GraphQL</div>
            <div>Monitoring</div>
            <div>Authorization</div>
            <div>Using @defer</div>
            <div>Testing</div>
          </div>
        </Chapters>
      </ChapterOverview>
      <Center>
        Copyright 2019 - Johannes Kling |{" "}
        <GatsbyLink to="/">TurnPro.in</GatsbyLink>
      </Center>
    </>
  );
};
export const query = graphql`
  {
    file(relativePath: { eq: "ebook-graphql-cover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
