import isPlacesPath from '.'

describe('Test isPlacesPath', () => {
	it('should return true if current path is places path', () => {
		expect(isPlacesPath('/places')).toBe(true)
	})

	it('should return false if current path is not places path', () => {
		expect(isPlacesPath('/places/1234')).toBe(false)
		expect(isPlacesPath('/placess')).toBe(false)
	})
})
