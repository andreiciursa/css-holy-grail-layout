import React from 'react'

// import { RemoveScroll } from 'react-remove-scroll'
// import { ScrollLocky } from 'react-scroll-locky'
import Locky from 'react-locky'
// import ScrollLock from 'react-scrolllock'
// import { disableBodyScroll } from 'body-scroll-lock';

export default function Scroll({ children }) {
  return (
    <Locky noDefault events={{ scroll: true }}>
      {children}
    </Locky>
  )
}
