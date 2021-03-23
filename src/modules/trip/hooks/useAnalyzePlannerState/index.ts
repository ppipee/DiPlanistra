import { useEffect } from 'react'

import { isNil } from 'lodash'
import { useHistory } from 'react-router'
import { useLocation } from 'react-use'

import isPlannerPath from 'common/utils/url/isPlannerPath'
import isTripPath from 'common/utils/url/isTripPath'

import { PlannerState } from 'modules/trip/constants'
import { PLANNER_PATH, TRIP_PATH } from 'modules/trip/routes/paths'

import usePlanner from '../usePlanner'

export default function useAnalyzePlannerState() {
	const planner = usePlanner()
	const history = useHistory()
	const { pathname } = useLocation()

	useEffect(() => {
		if (isNil(planner?.state)) return
		const { state, id } = planner

		if (planner.isPublic && !planner.isOwner && !isTripPath(pathname)) {
			history.push(`${TRIP_PATH}/${id}`)
		} else if (state === PlannerState.Plan && !isPlannerPath(pathname) && planner.isOwner) {
			history.push(`${PLANNER_PATH}/${id}`)
		} else if (state === PlannerState.Travel && !isTripPath(pathname)) {
			history.push(`${TRIP_PATH}/${id}`)
		}
	}, [planner, pathname])
}
