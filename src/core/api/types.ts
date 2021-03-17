import { CancelToken } from 'axios'

import { RequestType } from 'core/api/constants'
import { LocaleType } from 'core/locale/types'

import { RequestMethodType } from './constants'

export interface ClientConfig {
	apiEndpoint: string
	locale: LocaleType
	defaultRetryTimes?: number
	defaultThrottleTime?: number
	defaultTimeout?: number
	cacheEnabled?: boolean
}

export interface RequestConfig<Headers extends object, Body extends object, Params extends object> {
	path: string
	method: RequestMethodType
	body?: Body
	cancelToken?: CancelToken
	headers?: Headers
	params?: Params
	retryTimes?: number
	type?: RequestType
	cacheEnabled?: boolean
}

export type APIClientMiddlewareConfig = Omit<ClientConfig, 'locale'>
