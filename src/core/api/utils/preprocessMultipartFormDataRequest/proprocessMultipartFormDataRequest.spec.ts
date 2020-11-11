import preprocessMultipartFormDataRequest from '.'

describe('preprocessMultipartFormDataRequest', () => {
	const MOCK_BODY = {
		data1: 'data1',
	}

	const EXPECTED_FORM_DATA = new FormData()
	EXPECTED_FORM_DATA.append('data1', 'data1')

	it('should place headers content-type with Multipart and data as form data', () => {
		const MOCK_REQUEST = {}

		const EXPECTED_PROCESSED_REQUEST = {
			data: EXPECTED_FORM_DATA,
			headers: {
				'content-type': 'multipart/form-data',
			},
		}

		preprocessMultipartFormDataRequest(MOCK_REQUEST, MOCK_BODY)

		expect(MOCK_REQUEST).toEqual(EXPECTED_PROCESSED_REQUEST)
	})

	it('should place headers content-type with Multipart and keep existing header and data as form data', () => {
		const MOCK_REQUEST = {
			headers: {
				authorization: 'Bearer Mock',
			},
		}

		const EXPECTED_PROCESSED_REQUEST = {
			data: EXPECTED_FORM_DATA,
			headers: {
				'content-type': 'multipart/form-data',
				authorization: 'Bearer Mock',
			},
		}

		preprocessMultipartFormDataRequest(MOCK_REQUEST, MOCK_BODY)

		expect(MOCK_REQUEST).toEqual(EXPECTED_PROCESSED_REQUEST)
	})
})
