import React from 'react'

import { isEmpty } from 'lodash'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { CircleBlock, HeaderContainer } from './styled'

type Props = {
	day: number
	title?: string
	isOpen: boolean
	onClick: () => void
}
const DayHeader = ({ day, isOpen, onClick, title = '' }: Props) => {
	return (
		<HeaderContainer onClick={onClick} $size={spaces(12)}>
			<CircleBlock>
				<Text as="div" margin="auto" color={white} size={fontSizes(36)}>
					{day}
				</Text>
			</CircleBlock>
			<Flex $grow="1" $alignItems="center">
				{!isEmpty(title) ? title : `Day-${day}`}
			</Flex>
		</HeaderContainer>
	)
}

export default DayHeader
