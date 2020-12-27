import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import { createI18nWrapper } from 'core/locale/testUtils'
import { Locale } from 'core/locale/types'

import * as CalendarHeaderType from '.'

describe('Test CalendarHeader', () => {
	const useCalendarContextSpy = jest.fn()
	const useNavigateSpy = jest.fn()

	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)
	jest.doMock('common/components/Calendar/hooks/useNavigate', () => useNavigateSpy)

	const { default: CalendarHeader } = require('.') as typeof CalendarHeaderType

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render CalendarHeader correctly', () => {
		useCalendarContextSpy.mockReturnValue({ displayState: { month: 8, year: 2020 } })
		useNavigateSpy.mockReturnValue({
			setPrevMonth: 'prev month',
			setNextMonth: 'next month',
			isNextMonthAvailable: true,
			isPrevMonthAvailable: true,
		})

		const { container } = render(<CalendarHeader />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		expect(useCalendarContextSpy).toBeCalledTimes(2)
		expect(useNavigateSpy).toBeCalledTimes(2)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarHeader correctly in disable case', () => {
		useCalendarContextSpy.mockReturnValue({ displayState: { month: 8, year: 2020 } })
		useNavigateSpy.mockReturnValue({
			setPrevMonth: 'prev month',
			setNextMonth: 'next month',
			isNextMonthAvailable: false,
			isPrevMonthAvailable: false,
		})

		const { container } = render(<CalendarHeader />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		expect(useCalendarContextSpy).toBeCalledTimes(1)
		expect(useNavigateSpy).toBeCalledTimes(1)
		expect(container.firstChild).toMatchSnapshot()
	})
})
