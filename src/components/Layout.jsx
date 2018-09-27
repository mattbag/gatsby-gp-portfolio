import React from 'react'
import '../styles/global'
import Nav from './Nav'

// const fonts = [
//   '/static/playfair-display-latin-400-203179d16cd511feb9d8691f27926c3b.woff2',
//   '/static/playfair-display-latin-700-c8c6ab6af463c561473681a3b4621af3.woff2',
//   '/static/playfair-display-latin-700italic-c8ebe87087ddd3f2b639e80a1cf604f0.woff2',
//   '/static/playfair-display-latin-900-4679353199d23f37e5aceb461a374027.woff2',
// ]

class Layout extends React.Component {
  render() {
    const { location, children, template } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // console.log(location)
    return (

      <div data-template={template}>
        <Nav/>
        {children}
      </div>

    )
  }
}

export default Layout
