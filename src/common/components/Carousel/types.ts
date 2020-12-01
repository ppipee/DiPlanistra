import { ReactNode } from 'react'

import { Settings } from 'react-slick'

export interface SheetProps {
	slickSheet?: string
	slickThemeSheet?: string
}

export interface SlickProps extends Settings, SheetProps {
	dotColor?: string
}

export interface CarouselProps extends SlickProps {
	children: ReactNode
}
