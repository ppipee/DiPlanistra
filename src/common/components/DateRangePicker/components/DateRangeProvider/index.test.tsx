import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import * as DateRangeProviderType from '.'

describe('Test DateRangeProvider', () => {
	const DateRangeContextSpy = jest.fn()
	const useToggleSpy = jest.fn()
	const selectControllerSpy = jest.fn()

	jest.doMock('common/components/DateRangePicker/context', () => ({
		Provider: (props: Record<string, any>) => {
			DateRangeContextSpy(props)

			return <div {...props}>{props.children}</div>
		},
	}))

	const { default: DateRangeProvider } = require('.') as typeof DateRangeProviderType

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should render DateRangeProvider with style correctly', () => {
		useToggleSpy.mockReturnValue([false, selectControllerSpy])

		const { container } = render(
			<DateRangeProvider date={'Mock Date' as any} setDate={jest.fn() as any}>
				<div />
			</DateRangeProvider>,
		)

		expect(container.firstChild).toMatchSnapshot()
	})
})
