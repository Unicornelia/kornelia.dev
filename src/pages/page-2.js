import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="kornelia.dev" />
    <h1>Link to my <a href='https://github.com/Unicornelia'>Github</a></h1>
    <h1>Link to my <a href='https://unicornelia.com'>Blog</a></h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
