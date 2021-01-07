import { BlockProps } from '../Block/types'

export enum Variant {
	TABLET = 'md',
	MOBILE = 'sm',
}

export type VariantType = Variant | 'md' | 'sm'

export interface ResponsiveBlockProps extends BlockProps {
	$variant?: VariantType
	$paddingMobile?: string
	$marginMobile?: string
}
