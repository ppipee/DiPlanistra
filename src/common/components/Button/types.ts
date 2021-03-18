import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	$size?: SizeType
	$variant?: VariantType
	$responsive?: boolean
	$disable?: boolean
	$color: string
	$secondaryColor?: string
	$shadow?: boolean
	$border?: BorderType
}

type SizeType = typeof ButtonSizes[keyof typeof ButtonSizes]

export const ButtonSizes = {
	Small: 'small',
	Default: 'default',
} as const

type VariantType = typeof ButtonVariants[keyof typeof ButtonVariants]

export const ButtonVariants = {
	Outlined: 'outlined',
	Filled: 'filled',
	Text: 'text',
} as const

export const ButtonBorders = {
	Default: 'default',
	Curve: 'curve',
	Circle: 'circle',
} as const

type BorderType = typeof ButtonBorders[keyof typeof ButtonBorders]
