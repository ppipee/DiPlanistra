import { CancelToken } from 'axios'

import { RequestMethod } from 'core/api/constants'

import * as clientType from '.'

describe('client', () => {
	const createSpy = jest.fn()
	const requestSpy = jest.fn()
	const MOCK_DATA = {
		value: 1,
	}
	const MOCK_RESPONSE = {
		data: MOCK_DATA,
	}
	const fakeAxios = {
		create: createSpy,
		request: requestSpy,
	}
	jest.doMock('axios', () => fakeAxios)

	const getDefaultAPIClientAdapterSpy = jest.fn()
	const MOCK_ADAPTER = 'mock adapter'
	jest.doMock('api/utils/getDefaultAPIClientAdapter', () => getDefaultAPIClientAdapterSpy)

	const serializeParamsMock = jest.fn()
	jest.doMock('api/utils/serializeParams', () => serializeParamsMock)

	const verifyUpdatingRequirementSpy = jest.fn()
	jest.doMock('api/utils/verifyUpdatingRequirement', () => verifyUpdatingRequirementSpy)

	const preprocessRequestSpy = jest.fn()
	jest.doMock('api/utils/preprocessRequest', () => preprocessRequestSpy)

	const MOCK_CLIENT_CONFIG = {
		apiEndpoint: 'https://pdev.wndv.co',
		apiVersion: '5.120',
		locale: 'th',
		defaultTimeout: 10000,
		defaultThrottleTime: 2000,
		defaultRetryTimes: 3,
		cacheEnabled: true,
	}

	function prepareAPIClientTestCycle() {
		beforeEach(() => {
			getDefaultAPIClientAdapterSpy.mockReturnValue(MOCK_ADAPTER)
			createSpy.mockReturnValue(fakeAxios)
			requestSpy.mockReturnValue(Promise.resolve(MOCK_RESPONSE))
		})

		afterEach(() => {
			createSpy.mockReset()
			getDefaultAPIClientAdapterSpy.mockReset()
			verifyUpdatingRequirementSpy.mockReset()
			preprocessRequestSpy.mockReset()
			requestSpy.mockReset()
		})
	}

	function createAPIClient() {
		const client = new APIClient(MOCK_CLIENT_CONFIG)

		return client
	}

	const { default: APIClient } = require('.') as typeof clientType

	describe('constructor', () => {
		prepareAPIClientTestCycle()

		it('should create and assign axios instance and default params and attribute from input config', () => {
			const client = createAPIClient()

			expect(createSpy).toBeCalledWith({
				baseURL: 'https://pdev.wndv.co',
				timeout: 10000,
				paramsSerializer: serializeParamsMock,
				adapter: MOCK_ADAPTER,
			})
			expect(getDefaultAPIClientAdapterSpy).toBeCalledWith(3, 2000, true)
			expect(client.client).toEqual(fakeAxios)
			expect(client.defaultParams).toEqual({
				locale: 'th',
				_v: '5.120',
			})
		})
	})

	describe('fetch', () => {
		const defaultFetchParams = {
			cancelToken: ('CANCEL_TOKEN' as any) as CancelToken,
			headers: {
				authorization: 'Bearer Something',
			},
			method: RequestMethod.Get,
			path: '/find-something',
			retryTimes: 100,
		}

		prepareAPIClientTestCycle()

		it('should perform axios request with input request options', async () => {
			verifyUpdatingRequirementSpy.mockReturnValue(false)
			const client = createAPIClient()

			const responseData = await client.fetch({
				...defaultFetchParams,
				params: {
					q: 'something',
				},
			})

			expect(responseData).toEqual(MOCK_DATA)
			expect(verifyUpdatingRequirementSpy).toBeCalledWith(RequestMethod.Get, {
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Get,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
					q: 'something',
				},
				url: '/find-something',
			})
			expect(requestSpy).toBeCalledWith({
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Get,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
					q: 'something',
				},
				url: '/find-something',
			})
		})

		it('should perform axios request with input request options and params as default params if no input params', async () => {
			verifyUpdatingRequirementSpy.mockReturnValue(false)
			const client = createAPIClient()

			const responseData = await client.fetch({
				...defaultFetchParams,
			})

			expect(responseData).toEqual(MOCK_DATA)
			expect(verifyUpdatingRequirementSpy).toBeCalledWith(RequestMethod.Get, {
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Get,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
				},
				url: '/find-something',
			})
			expect(preprocessRequestSpy).not.toBeCalled()
			expect(requestSpy).toBeCalledWith({
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Get,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
				},
				url: '/find-something',
			})
		})

		it('should perform preprocess request if method is updating method', async () => {
			verifyUpdatingRequirementSpy.mockReturnValue(true)
			const client = createAPIClient()

			const responseData = await client.fetch({
				cancelToken: ('CANCEL_TOKEN' as any) as CancelToken,
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Post,
				path: '/find-something',
				retryTimes: 100,
			})

			expect(responseData).toEqual(MOCK_DATA)
			expect(verifyUpdatingRequirementSpy).toBeCalledWith(RequestMethod.Post, {
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Post,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
				},
				url: '/find-something',
			})
			expect(requestSpy).toBeCalledWith({
				cancelToken: 'CANCEL_TOKEN',
				headers: {
					authorization: 'Bearer Something',
				},
				method: RequestMethod.Post,
				retryTimes: 100,
				params: {
					locale: 'th',
					_v: '5.120',
				},
				url: '/find-something',
			})
		})
	})
})
