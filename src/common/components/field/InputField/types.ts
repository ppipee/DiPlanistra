import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'

import { FieldProps } from 'common/components/field/FieldStyle/types'
import { IconComponent } from 'common/components/icons/types'

export interface InputFieldProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {
	$suffix?: ReactNode
	$suffixIcon?: IconComponent
	$prefix?: ReactNode
	$prefixIcon?: IconComponent
	$suffixClickable?: boolean
	$prefixClickable?: boolean
	$width?: string
	$iconColor?: string
}

export interface ExtendsProps extends HTMLAttributes<HTMLDivElement> {
	$clickable?: boolean
}
