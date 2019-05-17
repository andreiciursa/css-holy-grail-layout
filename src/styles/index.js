import { COLORS, FONTS } from '../theme'

export const GLOBAL_STYLES = {
  'html, body': {
    color: COLORS.text,
    fontFamily: FONTS.join(', '),
    boxSizing: 'border-box',
    fontSize: 15,
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },

  a: {
    color: COLORS.blue,
    textDecoration: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    margin: '0',
  },
}
