import React from 'react'

import { IconProps } from '../types'

const CorrectIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.25 9.45001L2.8 7.00001L1.98334 7.81668L5.25 11.0833L12.25 4.08334L11.4333 3.26668L5.25 9.45001Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default CorrectIcon
