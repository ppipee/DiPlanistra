import preprocessFormRequest from '.'

describe('preprocessFormRequest', () => {
	const MOCK_BODY = {
		data1: 'data1',
		data2: {
			field1: 'field1',
			field: 'field2',
		},
		data3: [1, 2, 3],
		data4: [
			{
				value: 1,
			},
		],
	}

	const EXPECTED_DATA =
		'data1=data1&data2.field1=field1&data2.field=field2&data3%5B0%5D=1&data3%5B1%5D=2&data3%5B2%5D=3&data4%5B0%5D.value=1'

	it('should place headers content-type with UrlEncodedForm and data as form formatted', () => {
		const MOCK_REQUEST = {}

		const EXPECTED_PROCESSED_REQUEST = {
			data: EXPECTED_DATA,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
		}

		preprocessFormRequest(MOCK_REQUEST, MOCK_BODY)

		expect(MOCK_REQUEST).toEqual(EXPECTED_PROCESSED_REQUEST)
	})

	it('should place headers content-type with UrlEncodedForm and keep existing header and data as form formatted', () => {
		const MOCK_REQUEST = {
			headers: {
				authorization: 'Bearer Mock',
			},
		}

		const EXPECTED_PROCESSED_REQUEST = {
			data: EXPECTED_DATA,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				authorization: 'Bearer Mock',
			},
		}

		preprocessFormRequest(MOCK_REQUEST, MOCK_BODY)

		expect(MOCK_REQUEST).toEqual(EXPECTED_PROCESSED_REQUEST)
	})
})
