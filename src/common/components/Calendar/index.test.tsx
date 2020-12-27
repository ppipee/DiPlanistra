import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import * as CalendarType from '.'

describe('Test Calendar', () => {
	jest.doMock('./components/CalendarHeader', () => () => <div>CalendarHeader</div>)
	jest.doMock('./components/CalendarTable', () => () => <div>CalendarTable</div>)
	jest.doMock('./components/CalendarProvider', () => (props: any) => <div>{props.children}</div>)

	const { default: Calendar } = require('./index') as typeof CalendarType
	const setDate = () => {}

	it('should render Calendar with default date', () => {
		const MOCK_DEFAULT = {
			startDate: new Date(2020, 1),
			endDate: new Date(2020, 2),
		}
		const { container } = render(<Calendar setDate={setDate} defaultDate={MOCK_DEFAULT} />)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render Calendar with out default date', () => {
		const { container } = render(<Calendar setDate={setDate}>children</Calendar>)

		expect(container.firstChild).toMatchSnapshot()
	})
})
