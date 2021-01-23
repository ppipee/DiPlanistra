import React, { ReactNode } from 'react'

import Fade from 'common/components/animation/Fade'
import ClickableIcon from 'common/components/ClickableIcon'
import Gap from 'common/components/Gap'
import CloseIcon from 'common/components/icons/CloseIcon'
import SeparatorLine from 'common/components/SeparatorLine'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import lineHeights from 'common/styles/mixins/lineHeights'
import spaces from 'common/styles/mixins/spaces'

import ModalOverlay from '../ModalOverlay'

import { IconWrapper, Modal } from './styled'

const ICON_SIZE = 24

type Props = {
	onClose?: () => void
	title?: string
	children: ReactNode
	closeWithOverlay?: boolean
	width?: string
	withoutLine?: boolean
}

const CloseableModal = ({ onClose, title, children, width, closeWithOverlay = true, withoutLine }: Props) => {
	return (
		<>
			<Fade>
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
						{title && !withoutLine && <SeparatorLine spacing={`${spaces(4)} 0 ${spaces(8)}`} color={gray[200]} />}
					</div>
					{children}
				</Modal>
			</Fade>
			<ModalOverlay isOpen={true} onClick={closeWithOverlay ? onClose : () => {}} />
		</>
	)
}

export default CloseableModal
