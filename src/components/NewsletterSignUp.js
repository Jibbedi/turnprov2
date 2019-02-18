import React, { useState } from "react";
import styled, { css } from "styled-components";
import { InputButton } from "../ui/Button";

const NewsletterSignupWrapper = styled.form`
  display: flex;
  border-radius: 8px;
  height: 50px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  ${props =>
    props.focused &&
    css`
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
    `}

  input {
    border-radius: 8px 0 0 8px;
    padding: 0 20px;
    border: none;
    flex: 1;

    &:focus {
      outline: none;
    }
  }
`;

const NewsletterSignUp = () => {
  const [focused, setFocused] = useState(false);

  return (
    <NewsletterSignupWrapper
      action="https://johannes-kling.us14.list-manage.com/subscribe/post?u=0573c8cddcfe479bd6458f20a&amp;id=b888680473"
      method="post"
      name="mc-embedded-subscribe-form"
      novalidate
      focused={focused}
    >
      {/* bot prevention */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_0573c8cddcfe479bd6458f20a_b888680473"
          tabindex="-1"
          value=""
        />
      </div>

      <input
        type="email"
        name="EMAIL"
        required
        onFocus={e => setFocused(true)}
        onBlur={e => setFocused(false)}
        placeholder="Your E-Mail-Address"
      />
      <InputButton type="submit">Sign Up</InputButton>
    </NewsletterSignupWrapper>
  );
};

export default NewsletterSignUp;
