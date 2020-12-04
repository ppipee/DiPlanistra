import React from 'react'

import { IconProps } from '../types'

const PhoneIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M4.965 8.0925C6.045 10.215 7.785 11.9475 9.9075 13.035L11.5575 11.385C11.76 11.1825 12.06 11.115 12.3225 11.205C13.1625 11.4825 14.07 11.6325 15 11.6325C15.4125 11.6325 15.75 11.97 15.75 12.3825V15C15.75 15.4125 15.4125 15.75 15 15.75C7.9575 15.75 2.25 10.0425 2.25 3C2.25 2.5875 2.5875 2.25 3 2.25H5.625C6.0375 2.25 6.375 2.5875 6.375 3C6.375 3.9375 6.525 4.8375 6.8025 5.6775C6.885 5.94 6.825 6.2325 6.615 6.4425L4.965 8.0925Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default PhoneIcon
