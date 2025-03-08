import React from "react"
import { PageProps } from "gatsby"
import styled from "styled-components"
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Layout,
  Skills,
  Work,
} from "../components/index"

const StyledMainContainer = styled.main`
  counter-reset: section;
  justify-items: center;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      <StyledMainContainer>
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </StyledMainContainer>
      <Footer />
    </Layout>
  )
}

export default IndexPage
