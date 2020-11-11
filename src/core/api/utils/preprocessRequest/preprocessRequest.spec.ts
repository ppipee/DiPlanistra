import { RequestType } from 'core/api/constants'

import * as preprocessRequestType from '.'

describe('preprocessRequest', () => {
	const preprocessFormRequestSpy = jest.fn()
	jest.doMock('api/utils/preprocessFormRequest', () => preprocessFormRequestSpy)

	const preprocessMultipartFormDataRequestSpy = jest.fn()
	jest.doMock('api/utils/preprocessMultipartFormDataRequest', () => preprocessMultipartFormDataRequestSpy)

	const { default: preprocessRequest } = require('.') as typeof preprocessRequestType

	const MOCK_BODY = {
		data: 'data',
	}

	afterEach(() => {
		preprocessFormRequestSpy.mockReset()
		preprocessMultipartFormDataRequestSpy.mockReset()
	})

	it('should perform preprocessFormRequest if type is form', () => {
		const MOCK_REQUEST = {}

		preprocessRequest(RequestType.Form, MOCK_REQUEST, MOCK_BODY)

		expect(preprocessFormRequestSpy).toBeCalledTimes(1)
		expect(preprocessFormRequestSpy).toBeCalledWith(MOCK_REQUEST, MOCK_BODY)
		expect(preprocessMultipartFormDataRequestSpy).not.toBeCalled()
	})

	it('should perform preprocessMultipartFormDataRequest if type is multipart', () => {
		const MOCK_REQUEST = {}

		preprocessRequest(RequestType.Multipart, MOCK_REQUEST, MOCK_BODY)

		expect(preprocessMultipartFormDataRequestSpy).toBeCalledTimes(1)
		expect(preprocessMultipartFormDataRequestSpy).toBeCalledWith(MOCK_REQUEST, MOCK_BODY)
		expect(preprocessFormRequestSpy).not.toBeCalled()
	})

	it('should set body to data and not call other preprocess function if type is json', () => {
		const MOCK_REQUEST = {}

		const EXPECTED_REQUEST = {
			data: MOCK_BODY,
		}

		preprocessRequest(RequestType.Json, MOCK_REQUEST, MOCK_BODY)

		expect(preprocessMultipartFormDataRequestSpy).not.toBeCalled()
		expect(preprocessFormRequestSpy).not.toBeCalled()
		expect(MOCK_REQUEST).toEqual(EXPECTED_REQUEST)
	})
})
