import React from "react"
import styled from "styled-components"
import Icon from "../../assets/github-colored-logo.png"
import { Link } from "gatsby"

const StyledAboutSection = styled.section`
  max-width: 900px;
  justify-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`

const Work = () => {
  return (
    <StyledAboutSection id="work">
      <h3>Check out my Github</h3>
      <Link to="https://github.com/Unicornelia" target="_blank">
        <img src={Icon} alt="Github Icon" />
      </Link>
    </StyledAboutSection>
  )
}

export default Work
