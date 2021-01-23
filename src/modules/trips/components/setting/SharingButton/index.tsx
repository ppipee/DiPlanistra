import React from 'react'

import ShareIcon from 'common/components/icons/ShareIcon'
import useSwitch from 'common/hooks/useSwitch'
import { white } from 'common/styles/colors'

import SharingModal from '../SharingModal'

const ICON_SIZE = 28

const SharingButton = () => {
	const { isOpen, close, open } = useSwitch()

	return (
		<>
			<ShareIcon color={white} size={ICON_SIZE} cursor="pointer" onClick={open} />
			{isOpen && <SharingModal onClose={close} />}
		</>
	)
}

export default SharingButton
