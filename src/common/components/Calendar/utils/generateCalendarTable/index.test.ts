import generateCalendarTable from '.'

describe('generateCalendarTable', () => {
	it('should generate calender correctly', () => {
		const calendar = generateCalendarTable({ year: 2020, month: 9 })

		expect(calendar).toMatchSnapshot()
	})
})
