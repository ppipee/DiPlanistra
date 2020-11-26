import React from 'react'

import { IconProps } from '../types'

const ArrowDownIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.175 5.72668L10 8.78002L13.825 5.72668L15 6.66668L10 10.6667L5 6.66668L6.175 5.72668Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default ArrowDownIcon
