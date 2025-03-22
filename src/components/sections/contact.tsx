import React from "react"
import styled from "styled-components"
import { email } from "../../config"
import { Link } from "gatsby"

const StyledContactSection = styled.section`
  max-width: 900px;
  display: flex;
  justify-content: space-evenly;

  .button {
    color: var(--lightest-teal);
    background-color: transparent;
    border: 1px solid var(--lightest-teal);
    border-radius: var(--border-radius);
    padding: 1rem 1rem;
    margin: 0 1.25rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--green);
      transform: translate(-5px, -5px);
    }

    &:after {
      display: none !important;
    }
  }
`

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <Link className="button" to="/resume.pdf" target="_blank">
        Resume
      </Link>
      <Link className="button" to={`mailto:${email}`}>
        Send Email
      </Link>
    </StyledContactSection>
  )
}

export default Contact
