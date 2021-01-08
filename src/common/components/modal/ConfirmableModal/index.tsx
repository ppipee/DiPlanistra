import React, { ReactNode } from 'react'

import Button from 'common/components/Button'
import ClickableIcon from 'common/components/ClickableIcon'
import Gap from 'common/components/Gap'
import CloseIcon from 'common/components/icons/CloseIcon'
import SeparatorLine from 'common/components/SeparatorLine'
import Text from 'common/components/Text'
import { gray, green, main } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import lineHeights from 'common/styles/mixins/lineHeights'
import spaces from 'common/styles/mixins/spaces'

import ModalOverlay from '../ModalOverlay'

import { IconWrapper, Modal, ButtonContainer } from './styled'

const ICON_SIZE = 24

type Props = {
	onClose?: () => void
	title?: string
	children: ReactNode
	onCancel: () => void
	onConfirm: () => void
	closeWithOverlay?: boolean
	confirmText: ReactNode
	cancelText: ReactNode
	width?: string
}

const ConfirmableModal = ({
	onClose,
	title,
	children: description,
	onCancel,
	onConfirm,
	cancelText,
	confirmText,
	closeWithOverlay = true,
	width,
}: Props) => {
	return (
		<>
			<Modal $width={width}>
				<div>
					<Gap $size={spaces(8)}>
						{title && (
							<Text margin="0 auto" size={fontSizes(18)} lineHeight={lineHeights(24)} ellipsis={2}>
								{title}
							</Text>
						)}
						{onClose && (
							<IconWrapper>
								<ClickableIcon icon={CloseIcon} size={ICON_SIZE} color={gray[900]} onClick={onClose} />
							</IconWrapper>
						)}
					</Gap>
					{title && <SeparatorLine spacing={`${spaces(4)} 0 ${spaces(8)}`} color={gray[200]} />}
				</div>
				<Text size={fontSizes(16)}>{description}</Text>
				<ButtonContainer $size={spaces(8)}>
					<Button $color={main[500]} $variant="outlined" onClick={onCancel} $responsive>
						<span>{cancelText}</span>
					</Button>
					<Button $color={main[500]} $secondaryColor={green[500]} onClick={onConfirm} $responsive>
						<span>{confirmText}</span>
					</Button>
				</ButtonContainer>
			</Modal>
			<ModalOverlay isOpen={true} onClick={closeWithOverlay ? onClose : () => {}} />
		</>
	)
}

export default ConfirmableModal
