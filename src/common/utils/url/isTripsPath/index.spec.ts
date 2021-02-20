import isTripsPath from '.'

describe('Test isTripsPath', () => {
	it('should return true if current path is trips path', () => {
		expect(isTripsPath('/trips')).toBe(true)
	})

	it('should return false if current path is not trips path', () => {
		expect(isTripsPath('/trips/1234')).toBe(false)
		expect(isTripsPath('/tripss')).toBe(false)
	})
})
