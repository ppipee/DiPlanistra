import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import * as RangePickerPanelType from '.'

describe('Test RangePickerPanel', () => {
	const useDateRangeContextSpy = jest.fn()
	const overlaySpy = jest.fn()
	const closeSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/context', () => ({
		useDateRangeContext: useDateRangeContextSpy,
	}))

	jest.doMock('common/components/Gap', () => (props: Record<string, any>) => <div {...props}>{props.children}</div>)

	jest.doMock('common/components/Calendar', () => (props: Record<string, any>) => (
		<div {...props}>{props.children}</div>
	))

	jest.doMock('common/components/Overlay', () => (props: Record<string, any>) => {
		overlaySpy(props)

		return <div {...props}>{props.children}</div>
	})

	jest.doMock(
		'common/components/DateRangePicker/components/RangePickerPanelHeader',
		() => (props: Record<string, any>) => <div {...props}>{props.children}</div>,
	)

	const { default: RangePickerPanel } = require('.') as typeof RangePickerPanelType

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render RangePickerPanel correctly', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: {
				startDate: new Date(2020, 1, 1),
				endDate: new Date(2020, 1, 1),
			},
		})

		const { container } = render(<RangePickerPanel>children</RangePickerPanel>)

		expect(useDateRangeContextSpy).toBeCalledTimes(1)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should close DatePicker if overlay was clicked', () => {
		useDateRangeContextSpy.mockReturnValue({
			date: {
				startDate: new Date(2020, 1, 1),
				endDate: new Date(2020, 1, 1),
			},
		})

		render(<RangePickerPanel />)

		overlaySpy.mock.calls[0][0].onClick()

		expect(closeSpy).toBeCalledTimes(1)
		expect(useDateRangeContextSpy).toBeCalledTimes(1)
	})
})
