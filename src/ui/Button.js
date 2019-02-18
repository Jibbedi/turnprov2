import React from "react";
import styled from "styled-components";
import BackIconData from "../../assets/back.svg";
import GatsbyLink from "gatsby-link";

const Button = styled.button`
  cursor: pointer;
  --buttonBackgroundColor: #ffdf83;
  --buttonTextColor: #88401b;
  border: none;
  padding: 0 10px;
  background: var(--buttonBackgroundColor);
  color: var(--buttonTextColor);
  border-radius: 8px;
  font-weight: bold;
`;

export const InputButton = styled(Button)`
  border-radius: 0px 8px 8px 0px;
`;

export const IconButton = styled(Button)`
  padding: 5px 10px;
  padding-left: 28px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const BackButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;

  * {
    text-decoration: none;
    color: #88401b;
    font-weight: bold;
  }
`;

const BackIcon = styled.img`
  position: absolute;
  left: -32px;
  top: -9px;
  height: 67px;
  width: 67px;
`;

export const BackButton = props => (
  <BackButtonWrapper>
    <GatsbyLink to={props.to}>
      <BackIcon src={BackIconData} />
      <IconButton {...props} />
    </GatsbyLink>
  </BackButtonWrapper>
);

export default Button;
