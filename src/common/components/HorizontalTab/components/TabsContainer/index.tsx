import React, { HTMLAttributes } from 'react'

import { TabProps } from 'common/components/HorizontalTab/types'
import spaces from 'common/styles/mixins/spaces'

import Tab from '../Tab'

import { Container } from './styled'

type Props = {
	tabs: TabProps[]
} & HTMLAttributes<HTMLDivElement>

const TabsContainer = ({ tabs, ...props }: Props) => {
	return (
		<div {...props}>
			<Container $size={spaces(16)}>
				{tabs.map((tab, index) => (
					<Tab key={`tab-${index}`} value={tab.value} tab={tab.tab} index={index} />
				))}
			</Container>
		</div>
	)
}

export default TabsContainer
