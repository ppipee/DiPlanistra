import buildPx from '.'

describe('buildPx', () => {
	it('should concat number to px perfectly', () => {
		expect(buildPx(99)).toBe('99px')
	})
})
