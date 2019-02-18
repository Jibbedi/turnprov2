import React from "react";
import styled from "styled-components";
import Clock from "../../assets/clock.svg";
import Calendar from "../../assets/calendar.svg";

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-columns: max-content;
`;

const FooterInfo = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-columns: max-content;
  align-items: center;
  color: var(--bodyTextColor);

  img {
    margin: 0;
    width: 20px;
    height: 20px;
  }
`;

const PostInfo = ({ timeToRead, date }) => {
  return (
    <Footer>
      <FooterInfo>
        <img alt="time to read" src={Clock} /> {timeToRead} minutes to read
      </FooterInfo>
      <FooterInfo>
        <img alt="written on" src={Calendar} /> {date}
      </FooterInfo>
    </Footer>
  );
};

export default PostInfo;
