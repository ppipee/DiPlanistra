import React from 'react'

import { render, fireEvent } from '@testing-library/react'

import * as ComponentType from './Component.mock'

import mockComponent from '.'

describe('mockComponent', () => {
	const onClickSpy = jest.fn()

	const [MockComponentA, mockComponentASpy] = mockComponent('MockComponentA')

	const [MockComponentB, mockComponentBSpy] = mockComponent('MockComponentB')

	const [MockComponentC, mockComponentCSpy] = mockComponent('MockComponentC')

	const [MockComponentDefault, mockComponentDefaultSpy] = mockComponent('MockDefault')

	jest.doMock('./MockComponent.mock', () => ({
		MockComponentA,
		MockComponentB,
		MockComponentC,
		__esModule: true,
		default: MockComponentDefault,
	}))

	const { default: Component } = require('./Component.mock') as typeof ComponentType

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should spy on props that input to MockComponentA correctly with out render real component', () => {
		const { getByText } = render(<Component />)

		expect(mockComponentASpy).toBeCalledTimes(1)
		expect(mockComponentASpy).toBeCalledWith({ mock: 'mockA' })
		expect(getByText('MockComponentA')).toBeDefined()
	})

	it('should spy on props that input to MockComponentB correctly with out render real component', () => {
		const { getByText } = render(<Component />)

		expect(mockComponentBSpy).toBeCalledTimes(1)
		expect(mockComponentBSpy).toBeCalledWith({ mock: 'mockB' })
		expect(getByText('MockComponentB')).toBeDefined()
	})

	it('should spy on props that input to MockComponentC correctly with out render real component', () => {
		const { getByText } = render(<Component />)

		expect(mockComponentCSpy).toBeCalledTimes(1)
		expect(mockComponentCSpy).toBeCalledWith({})
		expect(getByText('MockC')).toBeDefined()
	})

	it('should call onClick in ComponentDefault correctly', () => {
		const { getByText } = render(<Component onClick={onClickSpy} />)

		expect(mockComponentDefaultSpy).toBeCalledTimes(1)
		expect(mockComponentDefaultSpy).toBeCalledWith({
			mock: 'mockDefault',
			onClick: onClickSpy,
		})
		expect(onClickSpy).toBeCalledTimes(0)

		const DefaultComponent = getByText('MockDefault')

		fireEvent.click(DefaultComponent)

		expect(onClickSpy).toBeCalledTimes(1)
	})
})
