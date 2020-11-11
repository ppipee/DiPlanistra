export type buildPxType<T extends number> = (value: T) => string

function buildPx(value: number) {
	return `${value}px`
}

export default buildPx
