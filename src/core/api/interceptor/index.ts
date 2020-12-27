import { AxiosRequestConfig } from 'axios'

import getUserToken from '../utils/getUserToken'

function onRequestInterceptor(config: AxiosRequestConfig) {
	const { token, headerKey } = getUserToken()

	if (!token) return config

	config.headers[headerKey] = `Bearer ${token}`

	return config
}

export default [onRequestInterceptor]
