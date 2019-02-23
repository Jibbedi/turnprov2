import React from "react";
import styled, { css } from "styled-components";
import GatsbyLink from "gatsby-link";

const CategoryPanelWrapper = styled.div`
  display: grid;
  cursor: pointer;
  place-items: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    justify-content: center;
  }
`;

const Icon = styled.img`
  --size: 50px;
  width: var(--size);
  height: var(--size);
  object-fit: cover;
  object-position: center center;
  margin: 0;

  ${props =>
    !props.active &&
    css`
      transition: 0.5s all;
      filter: saturate(0);
    `}

  &:hover {
    filter: saturate(1);
  }
`;

const CategoryPanel = ({ src, active, to }) => {
  return (
    <CategoryPanelWrapper>
      <GatsbyLink to={!active ? to : "/"}>
        <Icon src={src} active={active} />
      </GatsbyLink>
    </CategoryPanelWrapper>
  );
};

export default CategoryPanel;
