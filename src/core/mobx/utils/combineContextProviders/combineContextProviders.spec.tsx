import React, { createContext, useContext } from 'react'

import { render } from '@testing-library/react'

import combineContextProviders from '.'

describe('combineContextProviders', () => {
	it('should create provider with value', () => {
		class OuterStore {}
		class InnerStore {}

		const outerContext = createContext<OuterStore>(null)
		const innerContext = createContext<InnerStore>(null)

		const mapper = {
			inner: {
				StoreContext: outerContext,
				value: new InnerStore(),
			},
			outer: {
				StoreContext: innerContext,
				value: new OuterStore(),
			},
		}

		const contextSpy = jest.fn()

		const MockComponent = () => {
			const outer = useContext(outerContext)
			const inner = useContext(outerContext)

			contextSpy({
				outer,
				inner,
			})

			return <h1>Wrapped</h1>
		}

		const wrappedComponent = combineContextProviders(mapper, <MockComponent />)

		const { getByText } = render(wrappedComponent as JSX.Element)

		expect(getByText('Wrapped')).toBeDefined()
		expect(contextSpy).toBeCalledWith({
			outer: new OuterStore(),
			inner: new InnerStore(),
		})
	})
})
