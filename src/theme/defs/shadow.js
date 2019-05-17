import COLORS from './colors'

const SHADOW = (level = 1, color = COLORS.shadow) => `
	0 ${level * 1}px ${level * 2}px ${color},
	0 ${level * 2}px ${level * 4}px ${color},
	0 ${level * 4}px ${level * 8}px ${color}
`

export default SHADOW
