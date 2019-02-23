import React from "react";
import styled from "styled-components";
import NewsletterSignUp from "./NewsletterSignUp";

const Well = styled.div`
  background-color: #2c3e50;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  display: grid;
  justify-items: center;
  padding: 120px;

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }
`;

const IntroText = styled.div`
  max-width: 600px;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 700px;
`;

const NewsLetterWell = () => {
  return (
    <Well>
      <IntroText>
        Yet another mailing list? I feel you. <br /> I’m subscribed to way more
        than I read as well. But if you’re interested in any of the topics I
        write about, give me a try. You can always use the 90 day money back…
        wait a minute. <br /> It’s free anyways.
      </IntroText>
      <SignUpWrapper>
        <NewsletterSignUp />
      </SignUpWrapper>
    </Well>
  );
};

export default NewsLetterWell;
