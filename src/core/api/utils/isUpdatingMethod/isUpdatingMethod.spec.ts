import { RequestMethod } from 'core/api/constants'

import isUpdatingMethod from '.'

describe('isUpdatingMethod', () => {
	it('should return true for updating method', () => {
		expect(isUpdatingMethod(RequestMethod.Post)).toBe(true)
		expect(isUpdatingMethod(RequestMethod.Put)).toBe(true)
		expect(isUpdatingMethod(RequestMethod.Patch)).toBe(true)
	})

	it('should return false for non updating method', () => {
		expect(isUpdatingMethod(RequestMethod.Get)).toBe(false)
		expect(isUpdatingMethod(RequestMethod.Delete)).toBe(false)
	})
})
