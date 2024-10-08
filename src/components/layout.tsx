import React from "react"
import "./layout.css"
import { styled, ThemeProvider } from 'styled-components';
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: any) => {
  return (
    <>
      <div id="root">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledContent>
            <div id="content">
              {children}
            </div>
          </StyledContent>
        </ThemeProvider>

      </div>
    </>
  )
}

export default Layout
