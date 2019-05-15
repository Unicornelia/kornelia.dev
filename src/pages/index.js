import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to kornelia.dev</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <p>Currently under construction, please check back later</p>
    <Link to="/page-2/">Go to page 2 for links</Link>
  </Layout>
)

export default IndexPage
