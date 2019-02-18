import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
     --backgroundColor: #f5f7fa;
     --titleTextColor: #19283c;
     --bodyTextColor: #8c939a;
     --accentTextColor: #3C948D;
  }
  
  html, body {
  margin: 0;
  padding: 0;
   background: var(--backgroundColor);
  }
  
  * {
    box-sizing: border-box;
    color: var(--bodyTextColor);
    font-weight: lighter;
  }
  
`;

const Footer = styled.footer`
  display: grid;
  padding: 10px;
  place-items: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
      <Footer>Built with Gastby.</Footer>
    </>
  );
};

export default Layout;
