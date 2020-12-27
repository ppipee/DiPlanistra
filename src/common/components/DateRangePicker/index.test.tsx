import React from 'react'

import { render } from '@testing-library/react'

import 'jest-styled-components'
import * as DateRangePickerType from '.'

describe('Test DateRangePicker', () => {
	const MOCK_DATE = 'Mock Date' as any
	const setDateSpy = jest.fn()
	const useSwitchSpy = jest.fn()
	const rangePickerPanelSpy = jest.fn()
	const openSpy = jest.fn()
	const closeSpy = jest.fn()
	const dateInputSpy = jest.fn()
	const dateRangeProviderSpy = jest.fn()

	jest.doMock('common/hooks/useSwitch', () => useSwitchSpy)

	jest.doMock('common/components/DateRangePicker/components/DateRangeProvider', () => (props: any) => {
		dateRangeProviderSpy(props)
		return <div {...props}>{props.children}</div>
	})

	jest.doMock('./components/DateInput', () => (props: any) => {
		dateInputSpy(props)
		return <div {...props}>{props.children}</div>
	})

	jest.doMock('./components/RangePickerPanel', () => (props: any) => {
		rangePickerPanelSpy(props)
		return <div {...props}>{props.children}</div>
	})

	const { default: DateRangePicker } = require('.') as typeof DateRangePickerType

	beforeEach(() => {
		useSwitchSpy.mockReturnValue({ isOpen: true, open: openSpy, close: closeSpy })
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render DateRangePicker correctly', () => {
		const { container } = render(<DateRangePicker date={MOCK_DATE} setDate={setDateSpy} />)

		dateRangeProviderSpy.mock.calls[0][0].setDate()
		expect(dateRangeProviderSpy.mock.calls[0][0].date).toBe(MOCK_DATE)
		expect(setDateSpy).toBeCalledTimes(1)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should not render RangePickerPanel if state is false', () => {
		useSwitchSpy.mockReturnValue({ isOpen: false, open: openSpy, close: closeSpy })

		render(<DateRangePicker date={MOCK_DATE} setDate={setDateSpy} />)

		expect(rangePickerPanelSpy).not.toBeCalled()
		expect(openSpy).not.toBeCalled()
		expect(closeSpy).not.toBeCalled()
	})

	it('should perform RangePickerPanel correctly', () => {
		render(<DateRangePicker date={MOCK_DATE} setDate={setDateSpy} />)

		rangePickerPanelSpy.mock.calls[0][0].close()

		expect(closeSpy).toBeCalledTimes(1)
	})

	it('should open RangePickerPanel if DateInput was clicked', () => {
		render(<DateRangePicker date={MOCK_DATE} setDate={setDateSpy} />)

		dateInputSpy.mock.calls[0][0].open()

		expect(openSpy).toBeCalledTimes(1)
	})

	it('should close RangePickerPanel if dates from event are complete', () => {
		render(<DateRangePicker date={MOCK_DATE} setDate={setDateSpy} />)

		dateInputSpy.mock.calls[0][0].open()
		dateRangeProviderSpy.mock.calls[0][0].setDate({ startDate: new Date() })

		expect(openSpy).toBeCalledTimes(1)

		dateRangeProviderSpy.mock.calls[0][0].setDate({ startDate: new Date(), endDate: new Date() })

		expect(closeSpy).toBeCalledTimes(1)
	})
})
