import React from "react"
import styled from "styled-components"
import Tabs from "../tabs"

const StyledExperienceSection = styled.section`
  max-width: 900px;
`

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <h2>Places I have worked at</h2>
      <Tabs/>
    </StyledExperienceSection>
  )
}

export default Experience
