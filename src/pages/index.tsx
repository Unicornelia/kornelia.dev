import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main
        style={{
          paddingTop: "50px",
          height: "100vh",
        }}
      >
        Coming soon...
        <p>
          Link to my{" "}
          <OutboundLink href="https://github.com/Unicornelia">
            Github
          </OutboundLink>
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage
