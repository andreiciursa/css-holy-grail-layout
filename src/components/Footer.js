import React from 'react'
import { transparentize } from 'polished'

const styles = {
  position: 'sticky',
  bottom: 0,
  background: transparentize(0.5, 'black'),
  padding: '1rem',
  color: 'white',
}

export default function Footer() {
  return (
    <footer style={styles}>
      <h1>Footer</h1>
    </footer>
  )
}
