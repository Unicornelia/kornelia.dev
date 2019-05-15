import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to kornelia.dev</p>
    <p>Currently under construction, please check abck later</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
