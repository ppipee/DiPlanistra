import React from 'react'

import { IconProps } from '../types'

const LinkIcon = ({ size, secondColor, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M20.1584 38.8785C9.70987 38.8785 1.2666 30.3338 1.2666 19.7597C1.2666 9.1856 9.76264 0.587463 20.2112 0.587463C30.607 0.587463 39.103 9.1856 39.103 19.7597C39.103 30.3338 30.607 38.8785 20.1584 38.8785Z"
				fill="url(#link_paint_linear)"
			/>
			<path
				d="M12.5752 20C12.5752 18.4325 13.8493 17.1584 15.4168 17.1584H19.0835V15.4167H15.4168C12.8868 15.4167 10.8335 17.47 10.8335 20C10.8335 22.53 12.8868 24.5834 15.4168 24.5834H19.0835V22.8417H15.4168C13.8493 22.8417 12.5752 21.5675 12.5752 20ZM16.3335 20.9167H23.6668V19.0834H16.3335V20.9167ZM24.5835 15.4167H20.9168V17.1584H24.5835C26.151 17.1584 27.4252 18.4325 27.4252 20C27.4252 21.5675 26.151 22.8417 24.5835 22.8417H20.9168V24.5834H24.5835C27.1135 24.5834 29.1668 22.53 29.1668 20C29.1668 17.47 27.1135 15.4167 24.5835 15.4167Z"
				fill="white"
			/>
			<defs>
				<linearGradient id="link_paint_linear" x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
					<stop stopColor="currentColor" />
					<stop offset="1" stopColor={secondColor || 'currentColor'} />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default LinkIcon
