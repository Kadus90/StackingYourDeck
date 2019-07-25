import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1>Taking gaming strategies IRL</h1>
    </header>
    <p>This page is still being designed and content is on its way.</p>
    <p>Thanks for your patience whomever has stumbled upon this page.</p>
    <p>Will it build...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
