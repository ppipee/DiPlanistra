import isEventsPath from '.'

describe('Test isEventsPath', () => {
	it('should return true if current path is events path', () => {
		expect(isEventsPath('/events')).toBe(true)
	})

	it('should return false if current path is not events path', () => {
		expect(isEventsPath('/events/1234')).toBe(false)
		expect(isEventsPath('/eventss')).toBe(false)
	})
})
