import { Locale } from 'core/locale/types'

import getDateTimeFormat from '.'

describe('getDateTimeFormat', () => {
	const iso = '2019-10-02T00:00:00'

	it('should return thai date time', () => {
		const date = getDateTimeFormat(iso, Locale.th)
		expect(date).toEqual('2 ต.ค. 2019, 00.10')
	})

	it('should return english date time', () => {
		const date = getDateTimeFormat(iso, Locale.en)
		expect(date).toEqual('2 Oct 2019, 00.10')
	})

	it('should return date time with correct format', () => {
		const dateFormat = 'DD MMM YYYY, HH:MM'
		const date = getDateTimeFormat(iso, Locale.en, dateFormat)
		expect(date).toEqual('02 Oct 2019, 00:10')
	})

	it('should return default date time with TH text', () => {
		const date = getDateTimeFormat(iso)
		expect(date).toEqual('2 ต.ค. 2019, 00.10')
	})
})
