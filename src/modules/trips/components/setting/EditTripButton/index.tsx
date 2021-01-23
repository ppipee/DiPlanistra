import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { Params } from 'core/router/types'

import EditIcon from 'common/components/icons/EditIcon'
import { white } from 'common/styles/colors'

import { PLANNER_PATH } from 'modules/trips/routes/paths'

const ICON_SIZE = 28

const EditTripButton = () => {
	const { tripId } = useParams<Params>()
	const url = `${PLANNER_PATH}/${tripId}`

	return (
		<Link to={url}>
			<EditIcon color={white} size={ICON_SIZE} />
		</Link>
	)
}

export default EditTripButton
