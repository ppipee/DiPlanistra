import apiClient from 'core/api'

import plannerEndpoints from 'common/endpoints/planners'

import { InitPlanner, Planner, PlannerPreview } from 'modules/trips/types/planner'

export const getPlanners = () =>
	apiClient.fetch<PlannerPreview[]>({
		method: 'get',
		path: plannerEndpoints.planners(),
	})

export const getPlanner = (plannerId: string) =>
	apiClient.fetch<Planner>({
		method: 'get',
		path: plannerEndpoints.planner(plannerId),
	})

export const createPlanner = (data: InitPlanner) =>
	apiClient.fetch<Planner>({
		method: 'post',
		path: plannerEndpoints.planners(),
		body: data,
	})
