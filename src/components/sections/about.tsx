import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;
`;

const About = () => {

    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Gatsby', 'Node.js', 'Nest.js', 'TDD', 'Git', 'CSS'];

    return (
        <StyledAboutSection id='about'>
            <h4>Hello!</h4>
            <h1>My name is Kornelia</h1>
            <h3>I am a Software Developer</h3>
            <p>My main focus is Web Development using JavaScript</p>
        </StyledAboutSection>
    )
}

export default About