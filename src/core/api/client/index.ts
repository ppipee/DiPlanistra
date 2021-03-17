import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import { isNil } from 'lodash'

import { RequestType } from 'core/api/constants'
import { ClientConfig, RequestConfig } from 'core/api/types'
import getDefaultAPIClientAdapter from 'core/api/utils/getDefaultAPIClientAdapter'
import serializeParams from 'core/api/utils/serializeParams'
import verifyUpdatingRequirement from 'core/api/utils/verifyUpdatingRequirement'

class APIClient {
	client: AxiosInstance

	defaultParams: Record<string, string | number | undefined>

	constructor({
		apiEndpoint,
		locale,
		defaultTimeout,
		defaultThrottleTime,
		defaultRetryTimes,
		cacheEnabled,
	}: ClientConfig) {
		this.client = axios.create({
			baseURL: apiEndpoint,
			timeout: defaultTimeout,
			paramsSerializer: serializeParams,
			adapter: getDefaultAPIClientAdapter(defaultRetryTimes, defaultThrottleTime, cacheEnabled),
		})

		this.defaultParams = {
			locale,
		}
	}

	fetch<Response, Headers extends object = object, Body extends object = object, Params extends object = object>({
		body,
		cancelToken,
		headers,
		method,
		params,
		path,
		retryTimes,
		cacheEnabled,
		type = RequestType.Json,
	}: RequestConfig<Headers, Body, Params>) {
		const request: AxiosRequestConfig = {
			cancelToken,
			headers,
			method,
			retryTimes,
			params: {
				...this.defaultParams,
				...params,
			},
			url: path,
		}

		if (!isNil(cacheEnabled)) {
			request.adapter = cacheAdapterEnhancer(request.adapter || axios.defaults.adapter, {
				enabledByDefault: cacheEnabled,
			})
		}

		if (verifyUpdatingRequirement(method, request)) {
			request.data = body
		}

		return this.client.request<Response>(request).then((response) => {
			return response.data
		})
	}
}

export default APIClient
