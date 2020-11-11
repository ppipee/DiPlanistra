import { ComponentType, HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<SVGElement> {
	size: number
}

export type IconComponent = ComponentType<IconProps>
