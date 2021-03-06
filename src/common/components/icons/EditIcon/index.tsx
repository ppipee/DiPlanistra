import React from 'react'

import { IconProps } from '../types'

const EditIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M2.25 12.9375V15.75H5.0625L13.3575 7.45501L10.545 4.64251L2.25 12.9375ZM15.5325 5.28001C15.825 4.98751 15.825 4.51501 15.5325 4.22251L13.7775 2.46751C13.485 2.17501 13.0125 2.17501 12.72 2.46751L11.3475 3.84001L14.16 6.65251L15.5325 5.28001Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default EditIcon
