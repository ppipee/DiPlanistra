import React from 'react'

import { render } from '@testing-library/react'

import BaseDateInput from '.'

describe('BaseDateInput', () => {
	it('should render DateInput correctly', () => {
		const { container } = render(<BaseDateInput />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
