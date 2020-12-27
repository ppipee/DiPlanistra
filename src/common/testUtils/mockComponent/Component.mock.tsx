import React from 'react'

import MockComponentDefault, { MockComponentA, MockComponentB, MockComponentC } from './MockComponent.mock'

interface Props {
	onClick?: () => void
}

const Component = ({ onClick }: Props) => {
	return (
		<div>
			<MockComponentA mock="mockA" />
			<MockComponentB mock="mockB" />
			<MockComponentC>MockC</MockComponentC>
			<MockComponentDefault onClick={onClick} mock="mockDefault" />
		</div>
	)
}

export default Component
