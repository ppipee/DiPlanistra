import isPlannerPath from '.'

describe('Test isPlannerPath', () => {
	it('should return true if current path is planner path', () => {
		expect(isPlannerPath('/planners/1234asdb')).toBe(true)
	})

	it('should return false if current path is not planner path', () => {
		expect(isPlannerPath('/planners')).toBe(false)
	})
})
