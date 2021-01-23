import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import AddPlaceButton from 'modules/trips/components/AddPlaceButton'
import usePlannerMode from 'modules/trips/hooks/usePlannerMode'
import { PlannerMode } from 'modules/trips/types/store'

import { PLANNER_EMPTY } from '../locale'

import { Container } from './styled'

const ActivityEmpty = () => {
	const I18n = useI18n()
	const mode = usePlannerMode()

	return (
		<Container $padding={spaces(8)}>
			<Flex $responsive $direction="column" $justifyContent="space-around">
				<Text size={fontSizes(18)} color={gray[500]} margin="auto">
					{I18n.t(PLANNER_EMPTY)}
				</Text>
				{mode === PlannerMode.Edit && <AddPlaceButton />}
			</Flex>
		</Container>
	)
}

export default ActivityEmpty
