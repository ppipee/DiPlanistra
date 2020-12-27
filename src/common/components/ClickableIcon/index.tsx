import React from 'react'

import { IconProps, IconComponent } from '../icons/types'

interface Props extends IconProps {
	icon: IconComponent
}

const ClickableIcon = ({ icon, ...props }: Props) => {
	const Icon = icon

	return <Icon cursor="pointer" {...props} />
}

export default ClickableIcon
