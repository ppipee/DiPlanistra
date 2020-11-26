import { ReactNode, ReactText } from 'react'

export interface DropDownItemProps {
	children?: ReactNode
	active?: boolean
	value: ReactText
	name: string
	setItem?: (value: ReactText) => void
}
