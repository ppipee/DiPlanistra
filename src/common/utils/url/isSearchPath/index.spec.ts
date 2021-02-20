import isSearchPath from '.'

describe('Test isSearchPath', () => {
	it('should return true if current path is search path', () => {
		expect(isSearchPath('/places')).toBe(true)
		expect(isSearchPath('/trips')).toBe(true)
		expect(isSearchPath('/events')).toBe(true)
	})

	it('should return false if current path is not search path', () => {
		expect(isSearchPath('/places/1234')).toBe(false)
		expect(isSearchPath('/trips/1234')).toBe(false)
		expect(isSearchPath('/planners')).toBe(false)
		expect(isSearchPath('/planners/1234')).toBe(false)
		expect(isSearchPath('/me')).toBe(false)
	})
})
