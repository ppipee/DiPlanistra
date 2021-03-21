import React from 'react'

import { render } from '@testing-library/react'

import 'jest-styled-components'
import * as DateRangePickerType from '.'

describe('Test DateRangePicker', () => {
	const MOCK_DATE = 'Mock Date' as any
	const setDateSpy = jest.fn()
	const rangePickerPanelSpy = jest.fn()
	const dateInputSpy = jest.fn()
	const dateRangeProviderSpy = jest.fn()

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
})
