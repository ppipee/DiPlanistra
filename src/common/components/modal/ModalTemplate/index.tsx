import React, { HTMLAttributes, ReactNode } from 'react'

import ZIndexes from 'common/styles/mixins/zIndexes'

import { BaseModal, BaseModalWrapper } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	width?: string
}

const ModalTemplate = ({ children, width, style, ...props }: Props) => (
	<BaseModalWrapper $width={width} $position="fixed" $center $zIndex={ZIndexes.NormalPriorityModal}>
		<BaseModal {...props}>{children}</BaseModal>
	</BaseModalWrapper>
)

export default ModalTemplate
