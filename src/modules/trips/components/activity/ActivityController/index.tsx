import React, { useCallback } from 'react'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import EditIcon from 'common/components/icons/EditIcon'
import Text from 'common/components/Text'
import { red } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import usePlannerMode from 'modules/trips/hooks/usePlannerMode'
import useSetActivityMode from 'modules/trips/hooks/useSetActivityMode'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { PlannerMode } from 'modules/trips/types/planner'

import { EditButton } from './styled'

const ICON_SIZE = 18

type Props = {
	activityId: string
}

const ActivityController = ({ activityId }: Props) => {
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
						<Text>แก้ไข</Text>
					</Gap>
				</EditButton>
			</Flex>
		)
	}
	if (plannerMode === PlannerMode.View) {
		return <div>ดูสถานที่/ดูเส้นทาง</div>
	}

	return null
}

export default ActivityController
