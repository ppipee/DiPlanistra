export enum Variant {
	TABLET = 'md',
	MOBILE = 'sm',
}

export type VariantType = Variant | 'md' | 'sm'

export interface ResponsiveBlockProps {
	$variant?: VariantType
	$padding?: string
	$paddingMobile?: string
	$borderRadius?: string
}
