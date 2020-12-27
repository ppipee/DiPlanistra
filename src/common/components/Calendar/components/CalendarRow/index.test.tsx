import React from 'react'

import { render } from '@testing-library/react'
import 'jest-styled-components'

import * as CalendarRowType from '.'

describe('Calendar > CalendarRow', () => {
	const CalendarCellSpy = jest.fn()

	jest.doMock('common/components/Calendar/components/CalendarCell', () => (props: Record<string, any>) => {
		CalendarCellSpy(props)

		return <div {...props}>{props.children}</div>
	})

	const { default: CalendarRow } = require('.') as typeof CalendarRowType

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render CalendarRow width Dates', () => {
		const { container } = render(
			<CalendarRow
				row={[
					new Date(2020, 0, -1),
					new Date(2020, 0, 0),
					new Date(2020, 0, 1),
					new Date(2020, 0, 2),
					new Date(2020, 0, 3),
					new Date(2020, 0, 4),
					new Date(2020, 0, 5),
				]}
			/>,
		)

		expect(container.firstChild).toMatchSnapshot()
	})
})
