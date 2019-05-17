import React from 'react'

import Locky from 'react-locky'

export default function Scroll({ children }) {
  return (
    <Locky noDefault events={{ scroll: true }}>
      {children}
    </Locky>
  )
}
