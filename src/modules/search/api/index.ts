import apiClient from 'core/api'

import { DomainValue } from 'common/constants/business'
import commonEndpoints from 'common/endpoints/common'
import searchEndpoints from 'common/endpoints/search'

import { City } from 'modules/home/types'
import { Category } from 'modules/place/types/place'
import { PlannerPreview } from 'modules/trips/types/planner'

import { SearchTripsQueries } from '../types'

export const getCities = () =>
	apiClient.fetch<{ cities: City[] }>({
		method: 'get',
		path: commonEndpoints.cities(),
	})

export const getCategories = (domain: DomainValue) =>
	apiClient.fetch<{ categories: Category[] }>({
		method: 'get',
		path: commonEndpoints.categories(),
		params: {
			domain,
		},
	})

export const searchTrips = (queries?: SearchTripsQueries) =>
	apiClient.fetch<{ trips: PlannerPreview[] }>({
		method: 'get',
		path: searchEndpoints.trips(),
		params: queries,
	})
