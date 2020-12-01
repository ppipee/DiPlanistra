import getCurrentLocale from 'core/locale/utils/getCurrentLocale'

import APIClient from './client'

const apiClient = new APIClient({
	apiEndpoint: '/',
	locale: getCurrentLocale(),
})

export default apiClient
