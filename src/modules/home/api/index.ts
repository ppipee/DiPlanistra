import apiClient from 'core/api'

import meEndpoint from 'common/endpoints/me'

export const newCategories = (categories: number[]) =>
	apiClient.fetch<{ categories: number[] }>({
		method: 'put',
		path: meEndpoint.categories(),
		body: {
			categories,
		},
	})
