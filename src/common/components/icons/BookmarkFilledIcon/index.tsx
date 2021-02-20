import React from 'react'

import { IconProps } from '../types'

const BookmarkFilledIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="currentColor" />
		</svg>
	)
}

export default BookmarkFilledIcon
