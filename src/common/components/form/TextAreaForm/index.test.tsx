import React from 'react'

import 'jest-styled-components'
import { render } from '@testing-library/react'

import TextAreaForm from '.'

describe('TextAreaForm', () => {
	it('should render TextAreaForm correctly', () => {
		const { container } = render(<TextAreaForm />)

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render TextAreaForm with disabled state', () => {
		const { container } = render(<TextAreaForm disabled />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
