import React from 'react'

import { render } from '@testing-library/react'

import CalendarIcon from '.'

describe('CalendarIcon', () => {
	it('should render svg and match to snapshot', () => {
		const { container } = render(<CalendarIcon size={20} />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
