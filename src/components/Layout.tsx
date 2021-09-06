import React from "react"
import Navbar from "./Navbar/Navbar.jsx"
import Contact from "./Contact/Contact.jsx"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./Header"
// import "./Layout.css"

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Layout = ({ children }: LayoutProps) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Navbar/>
      <main>{children}</main>
      <Contact/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
