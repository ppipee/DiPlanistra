import convertDistance from '.'

describe('convertDistance', () => {
	it('should convert M unit to KM unit with two decimal then join unit at the end', () => {
		expect(convertDistance(100000)).toBe('100.00 km')
		expect(convertDistance(100000.5555)).toBe('100.00 km')
		expect(convertDistance(100222.5555)).toBe('100.22 km')
		expect(convertDistance(100555.5555)).toBe('100.56 km')
		expect(convertDistance(100.5555)).toBe('0.10 km')
	})
})
