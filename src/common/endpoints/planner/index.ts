import { ReactText } from 'react'

const plannerEndpoints = {
	planners: () => '/planners',
	planner: (plannerId: ReactText) => `/planners/${plannerId}`,

	plannerActivities: (plannerId: ReactText) => `/planners/${plannerId}/activities`,
	plannerActivity: (plannerId: ReactText, activityId: ReactText) => `/planners/${plannerId}/activities/${activityId}`,

	bookmarks: () => '/bookmarks',
	bookmark: (plannerId: ReactText) => `/bookmarks/${plannerId}`,
}

export default plannerEndpoints
