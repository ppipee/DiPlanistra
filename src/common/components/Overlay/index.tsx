import React from 'react'

import ZIndexes from 'common/styles/mixins/zIndexes'

import { OverlayWithBackground } from './styled'
import { OverlayProps } from './types'

const Overlay = ({
	isOpen,
	transparent,
	onClick,
	className,
	cursor,
	zIndex = ZIndexes.Local,
	position = 'fixed',
	lightBackground = false,
}: OverlayProps) => {
	if (!isOpen) {
		return null
	}
	return (
		<OverlayWithBackground
			onClick={onClick}
			className={className}
			$zIndex={zIndex}
			$transparent={transparent}
			$position={position}
			$cursor={cursor}
			$lightBackground={lightBackground}
		/>
	)
}

export default Overlay
