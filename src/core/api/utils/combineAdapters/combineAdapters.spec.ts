import * as combineAdaptersType from '.'

describe('combineAdapters', () => {
	const FAKE_ADAPTER = 'Fake Adapter'

	const fakeAxios = {
		defaults: {
			adapter: FAKE_ADAPTER,
		},
	}

	jest.doMock('axios', () => fakeAxios)

	const { default: combineAdapters } = require('.') as typeof combineAdaptersType

	it('should initialize adapter in correct order with axios default adapter', () => {
		const LAYER1_RESULT = 'layer1'
		const LAYER1_OPTIONS = {
			layer1: true,
		}
		const layer1CreateAdapterSpy = jest.fn().mockReturnValue(LAYER1_RESULT)

		const LAYER2_RESULT = 'layer2'
		const LAYER2_OPTIONS = {
			layer2: 'value',
		}
		const layer2CreateAdapterSpy = jest.fn().mockReturnValue(LAYER2_RESULT)

		const LAYER3_RESULT = 'layer3'
		const LAYER3_OPTIONS = {
			layer3: 3,
		}
		const layer3CreateAdapterSpy = jest.fn().mockReturnValue(LAYER3_RESULT)

		expect(
			combineAdapters([
				[layer1CreateAdapterSpy, LAYER1_OPTIONS],
				[layer2CreateAdapterSpy, LAYER2_OPTIONS],
				[layer3CreateAdapterSpy, LAYER3_OPTIONS],
			]),
		).toBe(LAYER3_RESULT)

		expect(layer1CreateAdapterSpy).toBeCalledWith(FAKE_ADAPTER, LAYER1_OPTIONS)
		expect(layer2CreateAdapterSpy).toBeCalledWith(LAYER1_RESULT, LAYER2_OPTIONS)
		expect(layer3CreateAdapterSpy).toBeCalledWith(LAYER2_RESULT, LAYER3_OPTIONS)
	})
})
