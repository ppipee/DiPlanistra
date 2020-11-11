import { HTMLAttributes } from 'react'

export enum Variant {
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
	VERTICAL_CUSTOM_SPACE = 'verticalCustom',
	HORIZONTAL_CUSTOM_SPACE = 'horizontalCustom',
}

export interface SeparatorLineProps extends HTMLAttributes<HTMLDivElement> {
	color: string
	thickness: string
	variant: 'vertical' | 'horizontal' | 'verticalCustom' | 'horizontalCustom'
	spacing?: string
}

export interface SeparatorLineStyledProps
	extends HTMLAttributes<HTMLDivElement> {
	$color: string
	$thickness: string
	$variant: 'vertical' | 'horizontal' | 'verticalCustom' | 'horizontalCustom'
	$spacing?: string
}
