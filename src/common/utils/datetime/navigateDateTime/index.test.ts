import { navigateMonth, navigateDate } from '.'

describe('navigateDateTime', () => {
	describe('navigateMonth', () => {
		it('should return month forward correctly', () => {
			let date = new Date('2020/12/07')
			expect(navigateMonth(date, 1).toString()).toBe(new Date('2021/01/07').toString())

			date = new Date('2020/11/07')
			expect(navigateMonth(date, 1).toString()).toBe(new Date('2020/12/07').toString())

			date = new Date('2020/10/31')
			expect(navigateMonth(date, 1).toString()).toBe(new Date('2020/11/30').toString())

			date = new Date('2020/11/07')
			expect(navigateMonth(date, 12).toString()).toBe(new Date('2021/11/07').toString())

			date = new Date('2020/11/07')
			expect(navigateMonth(date, 14).toString()).toBe(new Date('2022/01/07').toString())

			date = new Date('2020/02/29')
			expect(navigateMonth(date, 12).toString()).toBe(new Date('2021/02/28').toString())
		})

		it('should return month backward correctly', () => {
			let date = new Date('2020/12/07')
			expect(navigateMonth(date, -1).toString()).toBe(new Date('2020/11/07').toString())

			date = new Date('2020/01/07')
			expect(navigateMonth(date, -1).toString()).toBe(new Date('2019/12/07').toString())

			date = new Date('2020/02/29')
			expect(navigateMonth(date, -12).toString()).toBe(new Date('2019/02/28').toString())
		})
	})

	describe('navigateDate', () => {
		it('should return date forward correctly', () => {
			let date = new Date('2020/12/31')
			expect(navigateDate(date, 1).toString()).toBe(new Date('2021/01/01').toString())

			date = new Date('2020/02/28')
			expect(navigateDate(date, 1).toString()).toBe(new Date('2020/02/29').toString())

			date = new Date('2020/02/29')
			expect(navigateDate(date, 1).toString()).toBe(new Date('2020/03/01').toString())

			date = new Date('2022/02/28')
			expect(navigateDate(date, 1).toString()).toBe(new Date('2022/03/01').toString())

			date = new Date('2020/01/01')
			expect(navigateDate(date, 40).toString()).toBe(new Date('2020/02/10').toString())

			date = new Date('2020/01/01')
			expect(navigateDate(date, 60).toString()).toBe(new Date('2020/03/01').toString())
		})

		it('should return date backward correctly', () => {
			let date = new Date('2021/01/01')
			expect(navigateDate(date, -1).toString()).toBe(new Date('2020/12/31').toString())

			date = new Date('2020/02/29')
			expect(navigateDate(date, -1).toString()).toBe(new Date('2020/02/28').toString())

			date = new Date('2020/03/01')
			expect(navigateDate(date, -1).toString()).toBe(new Date('2020/02/29').toString())

			date = new Date('2022/03/01')
			expect(navigateDate(date, -1).toString()).toBe(new Date('2022/02/28').toString())

			date = new Date('2020/01/01')
			expect(navigateDate(date, -40).toString()).toBe(new Date('2019/11/22').toString())
		})
	})
})
