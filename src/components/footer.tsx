import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: var(--lightest-slate);
    font-size: var(--fz-xs);
    text-align: center;

    a {
        color: var(--green);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
