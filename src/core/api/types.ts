import { CancelToken } from 'axios'

import { RequestType, RequestMethod } from 'core/api/constants'

export interface ClientConfig {
	apiEndpoint: string
	locale: string
	defaultRetryTimes?: number
	defaultThrottleTime?: number
	defaultTimeout?: number
	cacheEnabled?: boolean
}

export interface RequestConfig<Headers extends object, Body extends object, Params extends object> {
	path: string
	method: RequestMethod
	body?: Body
	cancelToken?: CancelToken
	headers?: Headers
	params?: Params
	retryTimes?: number
	type?: RequestType
}

export type APIClientMiddlewareConfig = Omit<ClientConfig, 'locale'>
