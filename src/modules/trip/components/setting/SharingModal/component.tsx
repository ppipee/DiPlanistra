import React, { useCallback } from 'react'

import copy from 'copy-to-clipboard'
import QRCode from 'qrcode.react'
import { useLocation } from 'react-router-dom'
import { LineShareButton, FacebookShareButton, TwitterShareButton } from 'react-share'

import ClickableIcon from 'common/components/ClickableIcon'
import Gap from 'common/components/Gap'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import LineIcon from 'common/components/icons/LineIcon'
import LinkIcon from 'common/components/icons/LinkIcon'
import TwitterIcon from 'common/components/icons/TwitterIcon'
import CloseableModal from 'common/components/modal/CloseableModal'
import { blue, gray, green } from 'common/styles/colors'
import { FACEBOOK_COLOR } from 'common/styles/constants'
import spaces from 'common/styles/mixins/spaces'

import usePlanner from 'modules/trip/hooks/usePlanner'

import { QRCodeWrapper } from './styled'

type Props = {
	onClose: () => void
}

const ICON_SIZE = 40
const QR_CODE_SIZE = 160

const SharingModalComponent = ({ onClose }: Props) => {
	const planner = usePlanner()
	const { name } = planner
	const location = useLocation()

	const origin = process.env.NODE_ENV === 'development' ? window.location.origin : 'https://planistra.netlify.app/'
	const url = `${origin}${location.pathname}`

	const copyToClipboard = useCallback(() => {
		copy(url)
		onClose()
	}, [url])

	return (
		<CloseableModal onClose={onClose} title={name} withoutLine>
			<Gap $type="vertical" $alignItems="center" $size={spaces(24)}>
				<QRCodeWrapper>
					<QRCode value={url} size={QR_CODE_SIZE} />
				</QRCodeWrapper>
				<Gap $size={spaces(8)}>
					<ClickableIcon
						icon={LinkIcon}
						size={ICON_SIZE}
						cursor="pointer"
						color={gray[500]}
						secondColor={gray[200]}
						onClick={copyToClipboard}
					/>
					<LineShareButton title={planner.name} url={url} onClick={onClose}>
						<ClickableIcon icon={LineIcon} size={ICON_SIZE} cursor="pointer" color={green[500]} />
					</LineShareButton>
					<FacebookShareButton url={url} onClick={onClose}>
						<ClickableIcon icon={FacebookIcon} size={ICON_SIZE} cursor="pointer" color={FACEBOOK_COLOR} />
					</FacebookShareButton>
					<TwitterShareButton url={url} onClick={onClose}>
						<ClickableIcon
							icon={TwitterIcon}
							size={ICON_SIZE}
							cursor="pointer"
							color={blue[300]}
							secondColor={blue[200]}
						/>
					</TwitterShareButton>
				</Gap>
			</Gap>
		</CloseableModal>
	)
}

export default SharingModalComponent
