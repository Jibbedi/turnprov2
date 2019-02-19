import React from "react";
import styled from "styled-components";
import ProfilePicture from "../../assets/avatar.jpg";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";

const BioWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

const Avatar = styled.img`
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`;

const BioTextWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  letter-spacing: 1px;
  color: var(--accentTextColor);
  text-transform: uppercase;
  font-weight: bold;
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  grid-gap: 10px;
  margin-top: 10px;
`;

const Bio = () => {
  return (
    <BioWrapper>
      <Avatar src={ProfilePicture} />
      <BioTextWrapper>
        <Title>Author</Title>
        <div>
          Hi! I'm Johannes. Thanks for checking out my site. <br /> I hope the
          content is useful to you.
        </div>
        <Footer>
          <a href="https://twitter.com/jibbedi">
            <SocialIcon src={Twitter} />
          </a>
          <a href="https://github.com/Jibbedi">
            <SocialIcon src={Github} />
          </a>
        </Footer>
      </BioTextWrapper>
    </BioWrapper>
  );
};

export default Bio;
