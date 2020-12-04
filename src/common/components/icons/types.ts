import { ComponentType, HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<SVGElement> {
	size: number
	cursor?: string
	secondColor?: string
}

export type IconComponent = ComponentType<IconProps>
