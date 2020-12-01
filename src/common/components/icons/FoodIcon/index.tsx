import React from 'react'

import { IconProps } from '../types'

const FoodIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M18.06 22.99H19.72C20.56 22.99 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V22.99ZM1 21.99V21H16.03V21.99C16.03 22.54 15.58 22.99 15.02 22.99H2.01C1.45 22.99 1 22.54 1 21.99ZM16.03 14.99C16.03 6.99 1 6.99 1 14.99H16.03ZM1.02 17H16.02V19H1.02V17Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default FoodIcon
