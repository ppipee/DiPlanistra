import React from 'react'

import { IconProps } from '../types'

const TriangleIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M13.3333 8.33325V31.6666L31.6667 19.9999L13.3333 8.33325Z" fill="currentColor" />
		</svg>
	)
}

export default TriangleIcon
