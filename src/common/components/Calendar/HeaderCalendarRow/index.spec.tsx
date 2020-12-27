import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import HeaderCalendarRow from '.'

describe('HeaderCalendarRow', () => {
	it('should render HeaderCalendarRow correctly', () => {
		const { container } = render(<HeaderCalendarRow />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
