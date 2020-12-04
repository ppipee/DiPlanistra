import React from 'react'

import { IconProps } from '../types'

const SouvenirIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#clip0)">
				<path
					d="M13.7826 3.70405H10.4285V2.41608C10.4285 1.08385 9.34461 7.62939e-06 8.01238 7.62939e-06H7.98763C6.65543 7.62939e-06 5.57158 1.08385 5.57158 2.41608V3.70405H2.21736L1.87476 16H14.1252L13.7826 3.70405ZM6.52011 2.41608C6.52011 1.60687 7.17844 0.948529 7.98766 0.948529H8.01241C8.82163 0.948529 9.47996 1.60687 9.47996 2.41608V3.70405H6.52011V2.41608ZM2.85009 15.0515L3.13983 4.65257H12.8601L13.1499 15.0515H2.85009Z"
					fill="currentColor"
				/>
				<path
					d="M7.97893 6.78583L5.85889 8.42927H5.05432V9.37779H5.54692V11.8439H5.05432V12.7925H10.9457V11.8439H10.4109V9.37779H10.9457V8.42927H10.099L7.97893 6.78583ZM7.97893 7.98596L8.55079 8.42927H7.40703L7.97893 7.98596ZM6.49544 9.37779H7.50467V11.8439H6.49544V9.37779ZM9.46245 11.8439H8.45319V9.37779H9.46245V11.8439Z"
					fill="currentColor"
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

export default SouvenirIcon
