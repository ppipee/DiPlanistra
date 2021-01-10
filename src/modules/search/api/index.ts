import apiClient from 'core/api'

import { DomainValue } from 'common/constants/business'
import commonEndpoints from 'common/endpoints/common'

import { City } from 'modules/home/types'
import { Category } from 'modules/place/types/place'

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
