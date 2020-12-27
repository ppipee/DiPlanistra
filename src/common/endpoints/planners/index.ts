import { ReactText } from 'react'

const plannerEndpoints = {
	planners: () => '/planners',
	planner: (id: ReactText) => `/planners/${id}`,
}

export default plannerEndpoints
