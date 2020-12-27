import differentTime from '.'

describe('differentTime', () => {
	const START_TIME = new Date('2018-06-05')
	const END_TIME = new Date('2019-01-25')

	it('should return MS correctly', () => {
		expect(differentTime(START_TIME, END_TIME)).toBe(20217600000)
	})

	it('should return number of seconds correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'second')).toBe(20217600)
	})

	it('should return number of minutes correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'minute')).toBe(336960)
	})

	it('should return number of hours correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'hour')).toBe(5616)
	})

	it('should return number of dates correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'day')).toBe(234)
	})

	it('should return number of months correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'month')).toBe(7)
	})

	it('should return number of years correctly', () => {
		expect(differentTime(START_TIME, END_TIME, 'year')).toBe(0)
	})
})
