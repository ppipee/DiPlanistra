export interface GapProps {
	$size: string
	$alignCenter?: boolean
	$justifyCenter?: boolean
	$type?: GapType
	$responsive?: boolean
	$wrap?: 'nowrap' | 'wrap'
}

export enum GapTypeProps {
	Vertical = 'vertical',
	Horizontal = 'horizontal',
}

export type GapType = GapTypeProps | 'vertical' | 'horizontal'
