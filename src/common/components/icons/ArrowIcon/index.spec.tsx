import React from 'react'

import { render } from '@testing-library/react'

import ArrowIcon from '.'

describe('ArrowIcon', () => {
	it('should render svg and match to snapshot', () => {
		const { container } = render(<ArrowIcon size={20} />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
