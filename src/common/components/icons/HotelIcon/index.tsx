import React from 'react'

import { IconProps } from '../types'

const HotelIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M7 13C8.66 13 10 11.66 10 10C10 8.34 8.66 7 7 7C5.34 7 4 8.34 4 10C4 11.66 5.34 13 7 13ZM19 7H11V14H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default HotelIcon
