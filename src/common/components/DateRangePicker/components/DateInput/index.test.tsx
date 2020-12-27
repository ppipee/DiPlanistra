import React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { createI18nWrapper } from 'core/locale/testUtils'
import { Locale } from 'core/locale/types'

import * as DateInputType from '.'

describe('Test DateInput', () => {
	const useDateRangeContextSpy = jest.fn()
	const openSpy = jest.fn()
	const baseDateInputSpy = jest.fn()
	const getDisplayDateSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/utils/getDisplayDate/index', () => getDisplayDateSpy)
	jest.doMock('common/components/DateRangePicker/context', () => ({
		useDateRangeContext: useDateRangeContextSpy,
	}))
	jest.doMock('common/components/DateRangePicker/components/BaseDateInput', () => (props: any) => {
		baseDateInputSpy(props)
		return <div {...props}>{props.children}</div>
	})

	const { default: DateInput } = require('.') as typeof DateInputType

	beforeEach(() => {
		getDisplayDateSpy.mockReturnValue('Mock Display Date')
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render DateInput correctly', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: 'MOCK DATE',
			controllerIndex: 1,
		})

		const { container } = render(<DateInput open={openSpy} />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should perform DateInput correctly', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: 'MOCK DATE',
			controllerIndex: 1,
		})

		const { container } = render(<DateInput open={openSpy} />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		fireEvent.click(container.firstChild)

		expect(openSpy).toBeCalledTimes(1)
		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(baseDateInputSpy.mock.calls[0][0].value).toBe('Mock Display Date')

		expect(getDisplayDateSpy).toBeCalledTimes(1)
		expect(getDisplayDateSpy).toBeCalledWith('MOCK DATE')
	})
})
