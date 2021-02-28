import React, { HTMLAttributes, ReactNode } from 'react'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { green, main } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import useResponsive from 'common/styles/hooks/useResponsive'
import lineHeights from 'common/styles/mixins/lineHeights'
import spaces from 'common/styles/mixins/spaces'

import ModalOverlay from '../ModalOverlay'

import { BaseModal, ButtonStyle } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	onClose?: () => void
	title?: string
	children: ReactNode
	onCancel?: () => void
	onConfirm?: () => void
	closeByOverlay?: boolean
	confirmText?: ReactNode
	cancelText?: ReactNode
	width?: string
}

const Modal = ({
	onClose,
	title,
	children,
	onCancel,
	onConfirm,
	cancelText,
	confirmText,
	closeByOverlay = false,
	width,
	...props
}: Props) => {
	const { isDesktop } = useResponsive()
	const { subTitleSize } = useFontSizeResponsive()
	const showSubButton = cancelText && onCancel
	const showMainButton = confirmText && onConfirm

	return (
		<div>
			<BaseModal width={width}>
				{title && (
					<Text
						className="margin-bottom-16"
						size={subTitleSize}
						lineHeight={isDesktop ? lineHeights(24) : lineHeights(20)}
						ellipsis={2}
					>
						{title}
					</Text>
				)}
				<div {...props}>{children}</div>
				{(showMainButton || showSubButton) && (
					<Gap className="margin-top-24" $size={spaces(8)} $justifyCenter>
						{showSubButton && (
							<ButtonStyle
								$color={main[500]}
								$variant="outlined"
								onClick={onCancel}
								$responsive
								$size={isDesktop ? 'default' : 'small'}
							>
								{cancelText}
							</ButtonStyle>
						)}
						{showMainButton && (
							<ButtonStyle
								$color={main[500]}
								$secondaryColor={green[500]}
								onClick={onConfirm}
								$responsive
								$size={isDesktop ? 'default' : 'small'}
							>
								{confirmText}
							</ButtonStyle>
						)}
					</Gap>
				)}
			</BaseModal>
			<ModalOverlay isOpen={true} {...(closeByOverlay && { onClick: onClose })} />
		</div>
	)
}

export default Modal
