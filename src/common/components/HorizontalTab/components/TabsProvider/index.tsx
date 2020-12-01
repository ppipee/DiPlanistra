import React, { ReactNode, ReactText, useState } from 'react'

import HorizontalTabContext from 'common/components/HorizontalTab/context'
import { TabProps } from 'common/components/HorizontalTab/types'

import TabsContainer from '../TabsContainer'

type Props = {
	children: ReactNode
	tabs: TabProps[]
	defaultValue?: number
}

const TabsProvider = ({ children, tabs, defaultValue = 0 }: Props) => {
	const [activeIndex, setIndex] = useState(defaultValue)
	const [activeTab, setTab] = useState<ReactText>(tabs[defaultValue].value)

	return (
		<HorizontalTabContext.Provider
			value={{
				tabs,
				activeTab,
				setTab,
				activeIndex,
				setIndex,
			}}
		>
			<TabsContainer tabs={tabs} />
			{children}
		</HorizontalTabContext.Provider>
	)
}

export default TabsProvider
