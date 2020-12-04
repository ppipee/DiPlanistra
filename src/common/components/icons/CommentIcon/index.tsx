import React from 'react'

import { IconProps } from '../types'

const CommentIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M1.83996 2.66668V2.66695L1.83396 13.4589L3.6464 11.6465L3.79285 11.5H3.99996H13.3333C13.7905 11.5 14.1666 11.1239 14.1666 10.6667V2.66668C14.1666 2.20949 13.7905 1.83334 13.3333 1.83334H2.66662C2.21269 1.83334 1.83996 2.20622 1.83996 2.66668Z"
				fill="white"
				stroke="currentColor"
			/>
		</svg>
	)
}

export default CommentIcon
