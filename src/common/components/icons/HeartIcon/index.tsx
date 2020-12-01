import React from 'react'

import { IconProps } from '../types'

const HeartIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M14 24.9083L12.3083 23.3683C6.29998 17.92 2.33331 14.3267 2.33331 9.91667C2.33331 6.32333 5.15665 3.5 8.74998 3.5C10.78 3.5 12.7283 4.445 14 5.93833C15.2716 4.445 17.22 3.5 19.25 3.5C22.8433 3.5 25.6666 6.32333 25.6666 9.91667C25.6666 14.3267 21.7 17.92 15.6916 23.38L14 24.9083Z"
				fill="currentColor"
				stroke="currentColor"
			/>
		</svg>
	)
}

export default HeartIcon
