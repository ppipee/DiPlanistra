import { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	$size?: SizeType
	$variant?: VariantType
	$responsive?: boolean
	$disable?: boolean
	$color: string
	$secondaryColor?: string
	$shadow?: boolean
	$border?: BorderType
}

type SizeType = ButtonSizes | 'small' | 'default'

export enum ButtonSizes {
	Small = 'small',
	Default = 'default',
}

type VariantType = ButtonVariants | 'outlined' | 'filled' | 'text'

export enum ButtonVariants {
	Outlined = 'outlined',
	Filled = 'filled',
	Text = 'text',
}

type BorderType = ButtonBorders | 'default' | 'curve'

export enum ButtonBorders {
	Default = 'default',
	Curve = 'curve',
}
