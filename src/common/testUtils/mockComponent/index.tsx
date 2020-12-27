import React from 'react'

function mockComponent(
	componentName: string,
): [({ className, children, ...props }: Record<string, any>) => any, jest.Mock<any, any>] {
	const propsSpy = jest.fn()

	const MockComponent = ({ className, children, ...props }: Record<string, any>) => {
		propsSpy(props)
		const child = children || componentName

		return (
			<div onClick={props.onClick} data-testid={props['data-testid']}>
				{child}
			</div>
		)
	}

	return [MockComponent, propsSpy]
}

export default mockComponent
