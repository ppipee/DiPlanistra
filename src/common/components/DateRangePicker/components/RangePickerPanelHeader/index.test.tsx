import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import { createI18nWrapper } from 'core/locale/testUtils'
import { Locale } from 'core/locale/types'

import * as RangePickerPanelHeaderType from '.'

describe('Test RangePickerPanelHeader', () => {
	const useDateRangeContextSpy = jest.fn()
	const baseDateInputSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/context', () => ({
		useDateRangeContext: useDateRangeContextSpy,
	}))

	jest.doMock('common/components/DateRangePicker/components/BaseDateInput', () => (props: any) => {
		baseDateInputSpy(props)

		return <div {...props} />
	})

	jest.doMock('common/components/Gap', () => (props: any) => <div {...props}>{props.children}</div>)

	const { default: RangePickerPanelHeader } = require('.') as typeof RangePickerPanelHeaderType

	beforeEach(() => {
		useDateRangeContextSpy.mockReturnValue({
			date: { startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 2) },
		})
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render RangePickerPanelHeader with TH text correctly', () => {
		const { container } = render(<RangePickerPanelHeader />, {
			wrapper: createI18nWrapper(Locale.th),
		})

		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(baseDateInputSpy.mock.calls[0][0].value).toBe('01/01/2020')
		expect(baseDateInputSpy.mock.calls[1][0].value).toBe('02/01/2020')
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render RangePickerPanelHeader with EN text correctly', () => {
		render(<RangePickerPanelHeader />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(baseDateInputSpy.mock.calls[0][0].value).toBe('01/01/2020')
		expect(baseDateInputSpy.mock.calls[1][0].value).toBe('02/01/2020')
	})

	it('should not set empty string if start date is undefined', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: { endDate: new Date(2020, 0, 2) },
		})

		render(<RangePickerPanelHeader />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(baseDateInputSpy.mock.calls[0][0].value).toBe('')
		expect(baseDateInputSpy.mock.calls[1][0].value).toBe('02/01/2020')
	})

	it('should not set empty string if end date is undefined', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: { startDate: new Date(2020, 0, 1) },
		})

		render(<RangePickerPanelHeader />, {
			wrapper: createI18nWrapper(Locale.en),
		})

		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(baseDateInputSpy.mock.calls[0][0].value).toBe('01/01/2020')
		expect(baseDateInputSpy.mock.calls[1][0].value).toBe('')
	})
})
