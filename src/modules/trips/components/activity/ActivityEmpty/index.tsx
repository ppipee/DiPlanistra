import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import AddPlaceButton from 'modules/trips/components/AddPlaceButton'

import { PLANNER_EMPTY } from '../locale'

import { Container } from './styled'

const ActivityEmpty = () => {
	const I18n = useI18n()

	return (
		<Container $padding={`${spaces(48)} ${spaces(8)} ${spaces(8)} ${spaces(8)}`}>
			<Gap $type="vertical" $size={spaces(48)} $justifyContent="space-around">
				<Text size={fontSizes(18)} textAlign="center" color={gray[500]}>
					{I18n.t(PLANNER_EMPTY)}
				</Text>
				<AddPlaceButton />
			</Gap>
		</Container>
	)
}

export default ActivityEmpty
