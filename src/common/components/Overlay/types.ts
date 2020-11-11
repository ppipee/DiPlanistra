import { HTMLAttributes } from 'react'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
	position?: 'fixed' | 'absolute' | 'relative'
	zIndex?: 'unset' | number
	isOpen?: boolean
	transparent?: boolean
	cursor?: boolean
	lightBackground?: boolean
}
