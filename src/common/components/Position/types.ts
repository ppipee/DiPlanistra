import ZIndexes from 'common/styles/mixins/zIndexes'

export enum PositionTypes {
	Absolute = 'absolute',
	Relative = 'relative',
	Fixed = 'fixed',
}

export type PositionType = PositionTypes | 'absolute' | 'relative' | 'fixed'

export enum ScaleTypes {
	Full = 'full',
	FullWidth = 'fullWidth',
	FullHeight = 'fullHeight',
}

export type ScaleType = ScaleTypes | 'full' | 'fullWidth' | 'fullHeight'

export interface PositionProps {
	$position: PositionType
	$verticalCenter?: boolean
	$horizontalCenter?: boolean
	$center?: boolean
	$zIndex?: ZIndexes
	$top?: string
	$bottom?: string
	$left?: string
	$right?: string
	$scale?: ScaleType
}
