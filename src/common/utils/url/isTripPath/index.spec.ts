import isTripPath from '.'

describe('Test isTripPath', () => {
	it('should return true if current path is trip path', () => {
		expect(isTripPath('/trips/1234asdb')).toBe(true)
	})

	it('should return false if current path is not trip path', () => {
		expect(isTripPath('/trips')).toBe(false)
	})
})
