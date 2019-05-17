import React from 'react'
import { transparentize } from 'polished'

const styles = {
  position: 'sticky',
  top: 0,
  background: transparentize(0.25, 'white'),
  padding: '1rem',
}

export default function Header() {
  return (
    <header style={styles}>
      <h1>Header</h1>
    </header>
  )
}
