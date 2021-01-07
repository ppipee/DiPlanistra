import React from 'react'

import { IconComponent, IconProps } from '../icons/types'

import { Block } from './styled'

interface Props extends IconProps {
	icon: IconComponent
	blockSize: string
}

const IconBlock = ({ icon: Icon, blockSize, ...props }: Props) => {
	return (
		<Block $size={blockSize} $alignItems="center" $justifyContent="center">
			<Icon {...props} />
		</Block>
	)
}

export default IconBlock
