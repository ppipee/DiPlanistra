export enum BadgeVariant {
	Outlined = 'outlined',
	Filled = 'filled',
}

export type BadgeVariantTypes = BadgeVariant | 'filled' | 'outlined'

export interface BadgeProps {
	$variant?: BadgeVariantTypes
	$color: string
	$secondColor?: string
}
