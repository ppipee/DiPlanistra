import React, { useCallback } from 'react'

import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import EditIcon from 'common/components/icons/EditIcon'
import { LOCALE_EDIT } from 'common/locale'
import { main, red } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import { PLACE_PATH } from 'modules/place/routes/paths'
import usePlannerMode from 'modules/trip/hooks/usePlannerMode'
import useSetActivityMode from 'modules/trip/hooks/useSetActivityMode'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { ActivityPlan } from 'modules/trip/types/planner'
import { PlannerMode } from 'modules/trip/types/store'

import NavigateButton from '../NavigateButton'

import { DETAIL } from './locale'
import { EditButton } from './styled'

const ICON_SIZE = 18

type Props = {
	activityPlan: ActivityPlan
}

const ActivityController = ({ activityPlan }: Props) => {
	const {
		id: activityId,
		place: { coordinate, publicId },
	} = activityPlan

	const I18n = useI18n()
	const { isDesktop } = useResponsive()

	const plannerMode = usePlannerMode()
	const selectActivity = useActivityStore((store) => store.selectActivity)
	const { setUpdaterMode } = useSetActivityMode()

	const setActivity = useCallback(() => {
		selectActivity(activityId)
		setUpdaterMode()
	}, [activityId])

	if (plannerMode === PlannerMode.Edit) {
		return (
			<Flex $justifyContent="flex-end">
				<EditButton $variant="outlined" $color={red[500]} $border="curve" $size="small" onClick={setActivity}>
					<Gap $size={spaces(4)} $alignCenter>
						<EditIcon size={ICON_SIZE} />
						<span>{I18n.t(LOCALE_EDIT)}</span>
					</Gap>
				</EditButton>
			</Flex>
		)
	}
	if (plannerMode === PlannerMode.View) {
		return (
			<Gap $size={spaces(8)}>
				<Flex $alignItems="stretch" $direction="column" $responsive>
					<Link to={`${PLACE_PATH}/${publicId}`}>
						<Button
							$variant="outlined"
							$responsive
							$color={main[500]}
							$border="curve"
							$size={isDesktop ? 'default' : 'small'}
						>
							{I18n.t(DETAIL)}
						</Button>
					</Link>
				</Flex>
				<Flex $alignItems="stretch" $direction="column" $responsive>
					<NavigateButton coordinate={coordinate} />
				</Flex>
			</Gap>
		)
	}

	return null
}

export default ActivityController
