import React from 'react'

import Overlay from 'common/components/Overlay'
import { OverlayProps } from 'common/components/Overlay/types'
import ZIndexes from 'common/styles/mixins/zIndexes'

const ModalOverlay = (props: OverlayProps) => {
	return <Overlay zIndex={ZIndexes.ModalOverlay} position="fixed" {...props} />
}

export default ModalOverlay
