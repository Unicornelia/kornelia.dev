import React from "react"
import "./layout.css"
import styled from 'styled-components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: any) => {
  return (
    <>
      <div id="root">
        <StyledContent>
          <div id="content">
            {children}
            <footer style={{ fontSize: '1rem' }}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>          </div>

        </StyledContent>
      </div>
    </>
  )
}

export default Layout
