import React from 'react'

import AccountIcon from 'common/components/icons/AccountIcon'
import { black } from 'common/styles/colors'

import { PHOTO_SIZE, ProfilePhoto } from './styled'

type Props = {
	imageUrl?: string
	defaultColor?: string
}

const AccountPhoto = ({ imageUrl, defaultColor = black }: Props) => {
	if (!imageUrl) {
		return <AccountIcon size={PHOTO_SIZE} color={defaultColor} />
	}

	return <ProfilePhoto src={imageUrl} />
}

export default AccountPhoto
