import getCurrentLocale from 'core/locale/utils/getCurrentLocale'

import APIClient from './client'
import interceptors from './interceptor'

const apiClient = new APIClient({
	apiEndpoint: process.env.RAZZLE_API_URL,
	locale: getCurrentLocale(),
})

apiClient.client.interceptors.request.use(...interceptors)

export default apiClient
