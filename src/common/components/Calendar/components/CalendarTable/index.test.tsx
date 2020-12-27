import React from 'react'

import { render } from '@testing-library/react'
import 'jest-styled-components'

import { mockComponent } from 'common/testUtils'

import * as CalendarTableType from '.'

describe('Calendar > CalendarTable', () => {
	const useCalendarContextSpy = jest.fn()
	const CalendarRowSpy = jest.fn()
	const generateCalendarTableSpy = jest.fn()
	const [HeaderCalendarRowSpy, HeaderCalendarRowPropsSpy] = mockComponent('HeaderCalendarRow')

	jest.doMock('common/components/Calendar/HeaderCalendarRow', () => HeaderCalendarRowSpy)
	jest.doMock('common/components/Calendar/utils/generateCalendarTable', () => generateCalendarTableSpy)
	jest.doMock('common/components/Calendar/hooks/useCalendarContext', () => useCalendarContextSpy)
	jest.doMock('common/components/Calendar/components/CalendarRow', () => (props: Record<string, any>) => {
		CalendarRowSpy(props)

		return <div {...props}>{props.children}</div>
	})

	const { default: CalendarTable } = require('.') as typeof CalendarTableType

	it('should perform function CalendarTable correctly', () => {
		generateCalendarTableSpy.mockReturnValue([[1, 2, 3, 4, 5, 6, 7]])
		useCalendarContextSpy.mockReturnValue({ displayState: 'displayState' })

		render(<CalendarTable />)

		expect(CalendarRowSpy).toBeCalledTimes(1)
		expect(HeaderCalendarRowPropsSpy).toBeCalledTimes(1)
		expect(useCalendarContextSpy).toBeCalledTimes(1)

		expect(generateCalendarTableSpy).toBeCalledTimes(1)
		expect(generateCalendarTableSpy).toBeCalledWith('displayState')
	})

	it('should render CalendarTable correctly', () => {
		generateCalendarTableSpy.mockReturnValue([[1, 2, 3, 4, 5, 6, 7]])
		const { container } = render(<CalendarTable />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
