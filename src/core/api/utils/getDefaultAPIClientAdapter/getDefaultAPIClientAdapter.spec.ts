import { DEFAULT_RETRY_TIMES } from 'core/api/constants'

import * as getDefaultAPIClientAdapterType from '.'

describe('getDefaultAPIClientAdapter', () => {
	const cacheAdapterEnhancerMock = jest.fn()
	const retryAdapterEnhancerMock = jest.fn()
	const throttleAdapterEnhancerMock = jest.fn()

	jest.doMock('axios-extensions', () => ({
		cacheAdapterEnhancer: cacheAdapterEnhancerMock,
		retryAdapterEnhancer: retryAdapterEnhancerMock,
		throttleAdapterEnhancer: throttleAdapterEnhancerMock,
	}))

	const combineAdaptersSpy = jest.fn()
	const MOCK_COMBINED_ADAPTER = 'adapter'

	jest.doMock('api/utils/combineAdapters', () => combineAdaptersSpy)

	const { default: getDefaultAPIClientAdapter } = require('.') as typeof getDefaultAPIClientAdapterType

	beforeEach(() => {
		combineAdaptersSpy.mockReturnValue(MOCK_COMBINED_ADAPTER)
	})

	afterEach(() => {
		combineAdaptersSpy.mockReset()
	})

	it('should combine cacheAdapterEnhancer, retryAdapterEnhancer and throttleAdapterEnhancer with input options', () => {
		expect(getDefaultAPIClientAdapter(1, 1, false)).toBe(MOCK_COMBINED_ADAPTER)
		expect(combineAdaptersSpy).toBeCalledTimes(1)
		expect(combineAdaptersSpy).toBeCalledWith([
			[
				cacheAdapterEnhancerMock,
				{
					enabledByDefault: false,
				},
			],
			[
				throttleAdapterEnhancerMock,
				{
					threshold: 1,
				},
			],
			[
				retryAdapterEnhancerMock,
				{
					times: 1,
				},
			],
		])
	})

	it('should combine cacheAdapterEnhancer, retryAdapterEnhancer and throttleAdapterEnhancer with default options if no input option', () => {
		expect(getDefaultAPIClientAdapter()).toBe(MOCK_COMBINED_ADAPTER)
		expect(combineAdaptersSpy).toBeCalledTimes(1)
		expect(combineAdaptersSpy).toBeCalledWith([
			[
				cacheAdapterEnhancerMock,
				{
					enabledByDefault: true,
				},
			],
			[throttleAdapterEnhancerMock, {}],
			[
				retryAdapterEnhancerMock,
				{
					times: DEFAULT_RETRY_TIMES,
				},
			],
		])
	})
})
