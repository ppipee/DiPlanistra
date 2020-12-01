import React from 'react'

import { IconProps } from '../types'

const StarIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M9.99996 14.3917L15.15 17.5001L13.7833 11.6417L18.3333 7.70008L12.3416 7.19175L9.99996 1.66675L7.65829 7.19175L1.66663 7.70008L6.21663 11.6417L4.84996 17.5001L9.99996 14.3917Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default StarIcon
