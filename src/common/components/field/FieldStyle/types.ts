import { Property } from 'csstype'

export type VariantType = 'default' | 'success' | 'error'
export type BorderVariant = 'outlined' | 'default'

export interface FieldStyle {
	$borderColor?: Property.BorderColor
	$borderRadius?: string
	$background?: Property.Background
	$color?: Property.Color
}
export interface FieldProps {
	variant?: VariantType
	borderVariant?: BorderVariant
	fieldStyle?: FieldStyle
}
