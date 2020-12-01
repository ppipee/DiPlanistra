import React from 'react'

import { IconProps } from '../types'

const HeartEmptyIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10 18.8873C10.2847 18.8873 10.5593 18.7842 10.7732 18.5968C11.5811 17.8903 12.3601 17.2264 13.0473 16.6408L13.0509 16.6377C15.0658 14.9207 16.8057 13.4378 18.0164 11.9771C19.3697 10.3441 20 8.79578 20 7.10434C20 5.46097 19.4365 3.94485 18.4134 2.83508C17.3781 1.71219 15.9575 1.09375 14.4129 1.09375C13.2584 1.09375 12.2011 1.45874 11.2705 2.1785C10.8008 2.54181 10.3751 2.98645 10 3.5051C9.62481 2.98645 9.19924 2.54181 8.72942 2.1785C7.79879 1.45874 6.74151 1.09375 5.58703 1.09375C4.04254 1.09375 2.6218 1.71219 1.58649 2.83508C0.563391 3.94485 3.8147e-05 5.46097 3.8147e-05 7.10434C3.8147e-05 8.79578 0.630224 10.3441 1.98352 11.9769C3.19415 13.4378 4.93396 14.9205 6.94857 16.6374C7.63705 17.224 8.41723 17.8889 9.22701 18.5971C9.44079 18.7842 9.71544 18.8873 10 18.8873ZM14.4129 2.26532C15.6264 2.26532 16.7412 2.74963 17.5522 3.62915C18.3752 4.52194 18.8286 5.75607 18.8286 7.10434C18.8286 8.52692 18.2999 9.79919 17.1144 11.2296C15.9686 12.6122 14.2644 14.0645 12.2911 15.7462L12.2875 15.7492C11.5976 16.3371 10.8156 17.0036 10.0017 17.7153C9.18291 17.0023 8.39968 16.3347 7.70846 15.7458C5.73535 14.0642 4.03125 12.6122 2.88547 11.2296C1.70017 9.79919 1.17145 8.52692 1.17145 7.10434C1.17145 5.75607 1.62479 4.52194 2.44785 3.62915C3.2587 2.74963 4.37366 2.26532 5.58703 2.26532C6.47601 2.26532 7.2922 2.54791 8.01287 3.10516C8.65511 3.60199 9.1025 4.23004 9.3648 4.66949C9.49968 4.89548 9.73711 5.03036 10 5.03036C10.2629 5.03036 10.5004 4.89548 10.6352 4.66949C10.8974 4.23004 11.3448 3.60199 11.9872 3.10516C12.7078 2.54791 13.524 2.26532 14.4129 2.26532Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default HeartEmptyIcon