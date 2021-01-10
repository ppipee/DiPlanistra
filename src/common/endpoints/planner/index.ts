import { ReactText } from 'react'

const plannerEndpoints = {
	planners: () => '/planners',
	planner: (id: ReactText) => `/planners/${id}`,

	plannerActivities: (plannerId: ReactText) => `/planners/${plannerId}/activities`,
	plannerActivity: (plannerId: ReactText, activityId: ReactText) => `/planners/${plannerId}/activities/${activityId}`,
}

export default plannerEndpoints
