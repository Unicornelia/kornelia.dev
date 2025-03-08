import React from "react"
import styled from "styled-components"

const StyledAboutSection = styled.section`
  max-width: 900px;
`

const About = () => {
  return (
    <StyledAboutSection id="about">
      <h4>Hello!</h4>
      <h1>My name is Kornelia</h1>
      <h3>I am a Fullstack Developer</h3>
    </StyledAboutSection>
  )
}

export default About
