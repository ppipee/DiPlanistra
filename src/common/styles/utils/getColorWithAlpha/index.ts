import hexRgb from 'hex-rgb'

const getColorWithAlpha = (color: string, alpha: number) => {
	const { red, blue, green } = hexRgb(color)

	return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export default getColorWithAlpha
