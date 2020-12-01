import React, { useCallback } from 'react'

import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import { TabProps } from 'common/components/HorizontalTab/types'

import { TabContainer, TabLine, TabElement } from './styled'

interface Props extends TabProps {
	index: number
}

const Tab = ({ value, tab, index, action }: Props) => {
	const { setTab, setIndex, activeIndex } = useHorizontalTabContext()

	const onTabClick = useCallback(async () => {
		setTab(value)
		setIndex(index)

		action && (await action(value))
	}, [index, value])

	const shouldActive = activeIndex === index

	return (
		<TabContainer onClick={onTabClick} $active={shouldActive}>
			<TabElement $alignItems="center">{tab}</TabElement>
			<TabLine $active={shouldActive} $index={index} $activeIndex={activeIndex} />
		</TabContainer>
	)
}

export default Tab
