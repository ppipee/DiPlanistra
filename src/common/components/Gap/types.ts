import CSS from 'csstype'

export interface GapProps {
	$size: string
	$alignCenter?: boolean
	$justifyCenter?: boolean
	$justifyContent?: CSS.Properties['justifyContent']
	$alignItems?: CSS.Properties['alignItems']
	$type?: GapType
	$responsive?: boolean
	$wrap?: 'nowrap' | 'wrap'
	$padding?: string
}

export const GapTypeProps = {
	Vertical: 'vertical',
	Horizontal: 'horizontal',
	Grid: 'grid',
} as const

export type GapType = typeof GapTypeProps[keyof typeof GapTypeProps]
