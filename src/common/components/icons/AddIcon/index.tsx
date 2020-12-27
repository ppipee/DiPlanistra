import React from 'react'

import { IconProps } from '../types'

const AddIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M28.5 19.5H19.5V28.5H16.5V19.5H7.5V16.5H16.5V7.5H19.5V16.5H28.5V19.5Z" fill="currentColor" />
		</svg>
	)
}

export default AddIcon
