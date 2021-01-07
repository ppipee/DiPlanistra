import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { PLANNER_EMPTY } from '../locale'

import { Container } from './styled'

const ActivityEmpty = () => {
	const I18n = useI18n()

	return (
		<Container $padding={`${spaces(32)} 0`} $paddingMobile={`${spaces(24)} 0`}>
			<Flex $justifyContent="center">
				<Text size={fontSizes(18)} color={gray[500]}>
					{I18n.t(PLANNER_EMPTY)}
				</Text>
			</Flex>
		</Container>
	)
}

export default ActivityEmpty
