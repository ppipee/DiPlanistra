import React from 'react'

import { IconProps } from '../types'

const NavigationIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M8.20207 11.5427L8 11.4534L7.79793 11.5427L3.59195 13.401L8 2.65121L12.408 13.401L8.20207 11.5427Z"
				stroke="currentColor"
			/>
		</svg>
	)
}

export default NavigationIcon
