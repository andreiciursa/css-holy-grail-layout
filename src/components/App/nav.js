import React from 'react'

import Scroll from '../Scroll'
import Header from '../Header'
import Footer from '../Footer'
import Wrapper from '../Wrapper'

const styles = {
  background: 'hotpink',

  height: '100%',
  flex: '1 1 auto',

  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
}

export default function Nav() {
  return (
    <Scroll>
      <div style={styles}>
        <Header />
        <Wrapper />
        <Footer />
      </div>
    </Scroll>
  )
}
