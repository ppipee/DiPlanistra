import React from 'react'

import { IconProps } from '../types'

const BTSIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#clip0)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.9491 0.243744V2.35385C8.94146 2.57038 5.23074 6.61652 5.23074 15.1334H3.2098C3.13337 6.6802 7.20923 0.332903 14.9491 0.243744Z"
					fill="#0060A6"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0.243744V2.35385C6.00764 2.57038 9.71837 6.61652 9.71837 15.1334H11.7393C11.8157 6.6802 7.73988 0.332903 0 0.243744Z"
					fill="#E40000"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.9491 3.39395V5.53378C10.6397 5.56774 8.67821 8.41235 8.44045 15.1035H6.50867C6.64453 8.62463 8.58481 3.41093 14.9491 3.39395Z"
					fill="#0060A6"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 3.39395V5.53378C4.30937 5.56774 6.27087 8.41235 6.50863 15.1035H8.44042C8.30456 8.62463 6.36428 3.41093 0 3.39395Z"
					fill="#E40000"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width={size} height={size} fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default BTSIcon
