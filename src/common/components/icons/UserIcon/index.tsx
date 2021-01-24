import React from 'react'

import { IconProps } from '../types'

const UserIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9ZM9 10.5C6.9975 10.5 3 11.505 3 13.5V15H15V13.5C15 11.505 11.0025 10.5 9 10.5Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default UserIcon
