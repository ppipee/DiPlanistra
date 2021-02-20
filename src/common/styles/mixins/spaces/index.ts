import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

export type AvailableSpaceSizes = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 64

const spaces: buildPxType<AvailableSpaceSizes> = buildPx

export default spaces

export const Spaces = {
	2: '2px',
	4: '4px',
	6: '6px',
	8: '8px',
	10: '10px',
	12: '12px',
	14: '14px',
	16: '16px',
	20: '20px',
	24: '24px',
	32: '32px',
	36: '36px',
	40: '40px',
	48: '48px',
	64: '64px',
} as const

export type Spaces = typeof Spaces[keyof typeof Spaces]
