import React from 'react'

import { TabProps } from 'common/components/HorizontalTab/types'
import spaces from 'common/styles/mixins/spaces'

import Tab from '../Tab'

import { Container } from './styled'

type Props = {
	tabs: TabProps[]
}

const TabsContainer = ({ tabs }: Props) => {
	return (
		<Container $size={spaces(16)}>
			{tabs.map((tab, index) => (
				<Tab key={`tab-${index}`} value={tab.value} tab={tab.tab} index={index} />
			))}
		</Container>
	)
}

export default TabsContainer
