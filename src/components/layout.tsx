import React from "react"
import { styled, ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "../styles/theme"
import { Helmet } from "react-helmet"
import './layout.css'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }: any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kornelia's Portfolio</title>
        <meta
          name="description"
          content="Kornelia's developer portfolio showcasing projects and skills"
        />
      </Helmet>

      <div id="root">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledContent>
            <div id="content">{children}</div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout
