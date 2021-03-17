import React from 'react'

import EditIcon from 'common/components/icons/EditIcon'
import { white } from 'common/styles/colors'

import useUpdatePlannerState from 'modules/trip/hooks/useUpdatePlannerState'

const ICON_SIZE = 28

const EditTripButton = () => {
	const { moveToPlanState } = useUpdatePlannerState()

	return <EditIcon color={white} size={ICON_SIZE} onClick={moveToPlanState} />
}

export default EditTripButton
