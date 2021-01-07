import React, { useCallback } from 'react'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import EditIcon from 'common/components/icons/EditIcon'
import Text from 'common/components/Text'
import { red } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import usePlannerMode from 'modules/trips/hooks/usePlannerMode'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { PlannerMode } from 'modules/trips/types/planner'

import { EditButton } from './styled'

const ICON_SIZE = 18

type Props = {
	activityIndex: number
}

const ActivityController = ({ activityIndex }: Props) => {
	const mode = usePlannerMode()
	const selectActivity = useActivityStore((store) => store.selectActivity)

	const setActivityIndex = useCallback(() => {
		selectActivity(activityIndex)
	}, [activityIndex])

	if (mode === PlannerMode.Edit) {
		return (
			<Flex $justifyContent="flex-end">
				<EditButton $variant="outlined" $color={red[500]} $border="curve" $size="small" onClick={setActivityIndex}>
					<Gap $size={spaces(4)} $alignCenter>
						<EditIcon size={ICON_SIZE} />
						<Text>แก้ไข</Text>
					</Gap>
				</EditButton>
			</Flex>
		)
	}
	if (mode === PlannerMode.View) {
		return <div>ดูสถานที่/ดูเส้นทาง</div>
	}

	return null
}

export default ActivityController
