import React from 'react'

import { isEmpty } from 'lodash'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { CircleBlock, HeaderContainer } from './styled'

type Props = {
	day: number
	title?: string
	isOpen: boolean
	onClick: () => void
	isEditMode: boolean
}
const DayHeader = ({ day, isOpen, onClick, isEditMode, title = '' }: Props) => {
	const shouldHighlight = !isOpen && !isEditMode

	return (
		<HeaderContainer $shouldHighlight={shouldHighlight} onClick={onClick} $size={spaces(12)}>
			<CircleBlock $shouldHighlight={shouldHighlight}>
				<Text as="div" margin="auto" size={fontSizes(36)}>
					{day}
				</Text>
			</CircleBlock>
			<Flex $grow={1} $alignItems="center">
				{!isEmpty(title) ? title : `Day-${day}`}
			</Flex>
		</HeaderContainer>
	)
}

export default DayHeader
