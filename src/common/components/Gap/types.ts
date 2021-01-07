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

export enum GapTypeProps {
	Vertical = 'vertical',
	Horizontal = 'horizontal',
}

export type GapType = GapTypeProps | 'vertical' | 'horizontal'
