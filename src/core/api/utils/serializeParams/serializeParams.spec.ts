import serializeParams from '.'

describe('serializeParams', () => {
	it('should convert object to query params format with repeat array', () => {
		const MOCK_PARAMS = {
			data: 'x',
			arr: [1, 2, 3],
		}

		const EXPECTED_SERIALIZED_QS = 'data=x&arr=1&arr=2&arr=3'

		expect(serializeParams(MOCK_PARAMS)).toBe(EXPECTED_SERIALIZED_QS)
	})
})
