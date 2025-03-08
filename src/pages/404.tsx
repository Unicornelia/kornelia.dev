import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Styled404 = styled.div`
  text-align: center;
  padding: 50px;
  h1 {
    font-size: 2rem;
    color: var(--green);
  }
  p {
    font-size: 1.2rem;
    color: var(--slate);
  }
  a {
    color: var(--green);
    text-decoration: none;
    font-weight: bold;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Styled404>
      <h1>404 - Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <p>
        <a href="/">Go back home</a>
      </p>
    </Styled404>
  </Layout>
);

export default NotFoundPage;
