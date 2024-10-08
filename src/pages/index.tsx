import React from "react"
import { PageProps } from "gatsby"
import styled from "styled-components";
import { Layout, About, Skills } from '../components/index';
import Header from "../components/header";
import Footer from "../components/footer";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header/>
      <StyledMainContainer>
        <About />
        <Skills />
      </StyledMainContainer>
      <Footer/>
    </Layout>
  )
}

export default IndexPage
