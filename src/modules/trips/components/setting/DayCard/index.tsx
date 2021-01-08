import React, { useCallback } from 'react'

import Block from 'common/components/Block'
import FieldStyles from 'common/components/field/FieldStyle'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import useOnChange from 'common/hooks/useOnChange'
import useSwitch from 'common/hooks/useSwitch'
import { black, white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import lineHeights from 'common/styles/mixins/lineHeights'
import spaces from 'common/styles/mixins/spaces'

import DayCardController from '../DayCardController'

import { DayWrapper, ContentContainer } from './styled'

type Props = {
	day: number
	title: string
}

const DayCard = ({ day, title }: Props) => {
	const { keyword: dayTitle, onChange, setKeyword } = useOnChange(title)
	const { isOpen: isEditMode, open: setEditMode, close } = useSwitch()

	const setViewMode = useCallback(() => {
		setKeyword(title)
		close()
	}, [title])

	return (
		<Block $padding={spaces(12)} $variant="default">
			<Gap $size={spaces(12)} $justifyContent="space-between" $alignCenter>
				<ContentContainer $size={spaces(12)} $alignCenter>
					<DayWrapper $alignItems="center" $justifyContent="center">
						<Text size={fontSizes(24)} lineHeight={lineHeights(24)} color={white} weight="bold">
							{day}
						</Text>
					</DayWrapper>
					<Flex $grow="1" $direction="column" $alignItems="stretch">
						<Text as="div" size={fontSizes(16)} color={black} ellipsis={1}>
							{isEditMode ? <FieldStyles value={dayTitle} onChange={onChange} /> : dayTitle}
						</Text>
					</Flex>
				</ContentContainer>
				<DayCardController {...{ day, dayTitle, isEditMode, setEditMode, setViewMode }} />
			</Gap>
		</Block>
	)
}

export default DayCard
