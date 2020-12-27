import React from 'react'

import { render } from '@testing-library/react'
import 'jest-styled-components'

import { CalenderDateProps } from 'common/components/Calendar/types'

import * as CalendarProviderType from '.'

describe('Test CalendarProvider', () => {
	const CalendarContextSpy = jest.fn()

	jest.doMock('common/components/Calendar/context', () => ({
		Provider: (props: Record<string, any>) => {
			CalendarContextSpy(props)

			return <div {...props}>{props.children}</div>
		},
	}))

	const { default: CalendarProvider } = require('.') as typeof CalendarProviderType
	const setDate = (date: CalenderDateProps) => {}

	it('should render CalendarProvider correctly', () => {
		const { container } = render(
			<CalendarProvider setDate={setDate}>
				<div />
			</CalendarProvider>,
		)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarProvider with defaultDate', () => {
		const { container } = render(
			<CalendarProvider
				setDate={setDate}
				defaultDate={{ startDate: new Date('1998/09/07'), endDate: new Date('1998/09/07') }}
			>
				<div />
			</CalendarProvider>,
		)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render CalendarProvider with defaultDate but not container endDate', () => {
		const { container } = render(
			<CalendarProvider setDate={setDate} defaultDate={{ startDate: new Date('1998/09/07') }}>
				<div />
			</CalendarProvider>,
		)

		expect(container.firstChild).toMatchSnapshot()
	})
})
