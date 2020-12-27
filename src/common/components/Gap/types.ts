export interface GapProps {
	$size: string
	$alignCenter?: boolean
	$justifyCenter?: boolean
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
