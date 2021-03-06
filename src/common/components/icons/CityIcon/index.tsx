import React from 'react'

import { IconProps } from '../types'

const CityIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M11.25 8.25V3.75L9 1.5L6.75 3.75V5.25H2.25V15.75H15.75V8.25H11.25ZM5.25 14.25H3.75V12.75H5.25V14.25ZM5.25 11.25H3.75V9.75H5.25V11.25ZM5.25 8.25H3.75V6.75H5.25V8.25ZM9.75 14.25H8.25V12.75H9.75V14.25ZM9.75 11.25H8.25V9.75H9.75V11.25ZM9.75 8.25H8.25V6.75H9.75V8.25ZM9.75 5.25H8.25V3.75H9.75V5.25ZM14.25 14.25H12.75V12.75H14.25V14.25ZM14.25 11.25H12.75V9.75H14.25V11.25Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default CityIcon
