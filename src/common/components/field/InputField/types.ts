import { HTMLAttributes, InputHTMLAttributes, MouseEventHandler } from 'react'

import { FieldProps } from 'common/components/field/FieldStyle/types'
import { IconComponent } from 'common/components/icons/types'

export interface InputFieldProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {
	$icon?: IconComponent
	$width?: string
	$onIconClick?: MouseEventHandler
}

export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
	$clickable?: boolean
}
