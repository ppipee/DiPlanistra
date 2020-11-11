import { css, SimpleInterpolation } from 'styled-components'

import { ScreenName, BreakPoints } from './screenSizes'

type CssArgsType = Parameters<typeof css>

export const media = Object.keys(BreakPoints).reduce((mediaCollector, size) => {
	mediaCollector[size] = (...args: any[]) => css`
		@media (max-width: ${BreakPoints[size]}px) {
			${css(...(args as CssArgsType))};
		}
	`
	return mediaCollector
}, {}) as {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	[key in ScreenName]: (...args: SimpleInterpolation[]) => SimpleInterpolation
}

export function getVh(vh: number) {
	if (typeof window === 'undefined') {
		return `${vh}vh`
	}
	return `calc(var(--vh, 1vh) * ${vh})`
}
