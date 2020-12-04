import React from 'react'

import { IconProps } from '../types'

const FacebookIcon = ({ size, secondColor, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#clip0)">
				<path
					d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6611C28.6798 15.75 27.75 17.6 27.75 19.498V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.9081 48 35.9794 48 24Z"
					fill="url(#paint0_linear)"
				/>
				<path
					d="M33.3422 30.9375L34.4062 24H27.75V19.498C27.75 17.6 28.6798 15.75 31.6611 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0973 25.2651 48.0973 27.75 47.7084V30.9375H33.3422Z"
					fill="white"
				/>
			</g>
			<defs>
				<linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
					<stop stopColor="currentColor" />
					<stop offset="1" stopColor={secondColor || 'currentColor'} />
				</linearGradient>
				<clipPath id="clip0">
					<rect width={size} height={size} fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default FacebookIcon
