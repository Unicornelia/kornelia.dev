import React from "react"
import { PageProps } from "gatsby"
import styled from "styled-components";
import { Layout, About} from '../components/index';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <About/>
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage
