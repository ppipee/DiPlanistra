import React from 'react'

import { IconProps } from '../types'

const ArrowIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
				<rect width="20" height="20" fill="white" />
			</mask>
			<g mask="url(#mask0)">
				<path
					d="M2.8999 10.9H14.9274L11.3638 14.464C11.0122 14.8151 11.0122 15.3854 11.3638 15.7365C11.5396 15.9122 11.7695 16.0001 12 16.0001C12.2305 16.0001 12.4604 15.9122 12.6362 15.7364L17.7357 10.6369C17.8189 10.5539 17.8849 10.4543 17.9306 10.344C18.0215 10.1241 18.0215 9.8761 17.9306 9.6562C17.8849 9.5458 17.8189 9.4463 17.7357 9.3632L12.6362 4.2637C12.2846 3.9121 11.7153 3.9121 11.3637 4.2637C11.0121 4.6148 11.0121 5.1851 11.3637 5.5362L14.9273 9.1002H2.8999C2.4028 9.1002 2 9.503 2 10.0001C2 10.4972 2.4028 10.9 2.8999 10.9Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	)
}

export default ArrowIcon
