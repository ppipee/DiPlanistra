import convertDistanceToKM from '.'

describe('convertDistance', () => {
	it('should convert M unit to KM unit with two decimal then join unit at the end', () => {
		expect(convertDistanceToKM(100000)).toBe('100.00')
		expect(convertDistanceToKM(100000.5555)).toBe('100.00')
		expect(convertDistanceToKM(100222.5555)).toBe('100.22')
		expect(convertDistanceToKM(100555.5555)).toBe('100.56')
		expect(convertDistanceToKM(100.5555)).toBe('0.10')
	})
})
