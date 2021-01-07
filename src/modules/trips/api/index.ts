import apiClient from 'core/api'

import plannerEndpoints from 'common/endpoints/planners'

import { EditActivity, InitPlanner, Planner, PlannerPreview } from 'modules/trips/types/planner'

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

export const updatePlanner = (plannerId: string, planner: Planner) =>
	apiClient.fetch<Planner>({
		method: 'put',
		path: plannerEndpoints.planner(plannerId),
		body: planner,
	})

export const updateActivity = (plannerId: string, day: number, activity: EditActivity) =>
	apiClient.fetch<Planner>({
		method: 'put',
		path: plannerEndpoints.planner(plannerId),
		params: {
			day,
		},
		body: activity,
	})

export const deletePlanner = (plannerId: string) =>
	apiClient.fetch({
		method: 'delete',
		path: plannerEndpoints.planner(plannerId),
	})

export const deleteActivity = (plannerId: string, day: number, placeId: string) =>
	apiClient.fetch<Planner>({
		method: 'put',
		path: plannerEndpoints.planner(plannerId),
		params: {
			day,
			placeId,
		},
	})
