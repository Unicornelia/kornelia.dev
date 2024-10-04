import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 24px;
      }
    }
  }
`;

const About = () => {

    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Gatsby', 'Node.js', 'Nest.js', 'TDD', 'Git', 'CSS'];

    return (
        <StyledAboutSection id='about'>
            <h2>About Me</h2>
            <StyledText>
                <p>
                    Hello! My name is Kornelia and I am a FullStack Developer.
                </p>
                <p>Here are a few technologies I’ve been working with recently:</p>

                <ul className="skills-list">
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </StyledText>
        </StyledAboutSection>
    )
}

export default About