import { RequestMethod } from 'api/constants'
import MissingRequestBodyError from 'api/errors/MissingRequestBodyError'

import * as verifyUpdatingRequirementType from '.'

describe('verifyUpdatingRequirement', () => {
	const isUpdatingMethodSpy = jest.fn()
	jest.doMock('api/utils/isUpdatingMethod', () => isUpdatingMethodSpy)

	const { default: verifyUpdatingRequirement } = require('.') as typeof verifyUpdatingRequirementType

	const MOCK_BODY = {
		data: 'data',
	}

	afterEach(() => {
		isUpdatingMethodSpy.mockReset()
	})

	it('should return false if request method is not updating method and data is missing', () => {
		isUpdatingMethodSpy.mockReturnValue(false)

		expect(verifyUpdatingRequirement(RequestMethod.Get)).toBe(false)
		expect(isUpdatingMethodSpy).toBeCalledTimes(1)
		expect(isUpdatingMethodSpy).toBeCalledWith(RequestMethod.Get)
	})

	it('should return false if request method is not updating method and body is missing', () => {
		isUpdatingMethodSpy.mockReturnValue(false)

		expect(verifyUpdatingRequirement(RequestMethod.Get, MOCK_BODY)).toBe(false)
		expect(isUpdatingMethodSpy).toBeCalledTimes(1)
		expect(isUpdatingMethodSpy).toBeCalledWith(RequestMethod.Get)
	})

	it('should throw Missing Request Body Error if request method is updating method but body is missing', () => {
		isUpdatingMethodSpy.mockReturnValue(true)

		expect(() => verifyUpdatingRequirement(RequestMethod.Post)).toThrowError(MissingRequestBodyError)
		expect(isUpdatingMethodSpy).toBeCalledTimes(1)
		expect(isUpdatingMethodSpy).toBeCalledWith(RequestMethod.Post)
	})

	it('should return true if request method is updating method and request body is existed', () => {
		isUpdatingMethodSpy.mockReturnValue(true)

		expect(verifyUpdatingRequirement(RequestMethod.Post, MOCK_BODY)).toBe(true)
		expect(isUpdatingMethodSpy).toBeCalledTimes(1)
		expect(isUpdatingMethodSpy).toBeCalledWith(RequestMethod.Post)
	})
})
