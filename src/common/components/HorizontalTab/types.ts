import { ReactNode, ReactText } from 'react'

export interface TabProps {
	tab: ReactNode
	value: ReactText
	action?: (value: ReactText) => void | Promise<void>
}

export interface HorizontalTabProps {
	tabs: TabProps[]
	activeTab: ReactText
	activeIndex: number
	setTab: (value: ReactText) => void
	setIndex: (index: number) => void
}
