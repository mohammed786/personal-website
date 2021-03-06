import '../assets/scss/main.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import JSONData from '../content/mycontent.json'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title, description },
        },
      }) => (
        <>
          <Helmet title={title}>
            <meta name="description" content={description} />
            <meta name="image" content={'https://i.imgur.com/EfRnMm4.png'} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
              property="og:image"
              content={'https://i.imgur.com/EfRnMm4.png'}
            />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
