import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { navLinks } from "../config"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: var(--background);
  color: var(--lightest-slate);
  z-index: 12;
    
    img {
        height: 20px;
        width: 20px;
    }
`

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
      margin: 0 15px;
      position: relative;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        color: var(--text-color);
        text-decoration: none;

        &:hover {
          color: var(--green);
        }
      }
    }
  }
`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header>
      <StyledNav>
        <StyledLinks style={{ display: isMenuOpen ? "block" : "flex" }}>
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
    </header>
  )
}

export default Header
