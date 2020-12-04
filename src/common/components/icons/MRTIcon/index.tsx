import React from 'react'

import { IconProps } from '../types'

const MRTIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M7.5 0.75C3.358 0.75 0 4.06234 0 8.14984C0 10.4103 1.0271 12.4341 2.64564 13.7917H12.3526C13.9715 12.4341 15 10.4106 15 8.14984C15 4.06234 11.642 0.75 7.5 0.75Z"
				fill="#1E4F6F"
			/>
			<path
				d="M2.5282 12.2782V3.76794H5.61593L7.49975 7.44283L9.40824 3.76794H12.4683V12.2782H9.70033V7.72604L8.38591 10.4003H6.50539L5.18074 7.72604V12.2782H2.5282Z"
				fill="white"
			/>
		</svg>
	)
}

export default MRTIcon
