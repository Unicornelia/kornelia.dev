import { Link } from "gatsby";
import React from "react"
import styled from "styled-components";
import { navLinks } from "../config"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
`;



const Header = () => {
    return (
        <header>
            <StyledNav>
                <p>K</p>
                <StyledLinks>
                    <ol>
                        {navLinks &&
                            navLinks.map(({ url, name }, i) => (
                                <li key={i}>
                                    <Link to={url}>{name}</Link>
                                </li>
                            ))}
                    </ol>
                </StyledLinks>
            </StyledNav>
        </header >
    )
}

export default Header