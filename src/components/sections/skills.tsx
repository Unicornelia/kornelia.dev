import React from "react"
import styled from "styled-components"
import { skills } from "../../config"

const StyledText = styled.section`
  justify-items: center;
    
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    justify-content: center;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono), serif;
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 24px;
      }
    }
  }
`

const Skills = () => {
  return (
    <StyledText>
      <p>Some technologies I’ve been working with over the last 7 years:</p>
      <ul className="skills-list">
        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </StyledText>
  )
}

export default Skills
