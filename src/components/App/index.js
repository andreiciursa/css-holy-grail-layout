/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from 'react'
import { Global } from '@emotion/core'
import 'normalize.css'

import { GLOBAL_STYLES } from '../../styles'

import Main from './main'
import Nav from './nav'

console.log(typeof React)

const styles = {
  border: '4px solid yellow',

  display: 'flex',
  flexWrap: 'nowrap',

  position: 'fixed',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}

const App = ({ children }) => {
  return (
    <>
      <Global styles={GLOBAL_STYLES} />
      <div css={styles}>{children}</div>
    </>
  )
}

App.Main = Main
App.Nav = Nav

export default App
