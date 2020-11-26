import React from 'react'

import Gap from 'common/components/Gap'
import AccountIcon from 'common/components/icons/AccountIcon'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

const ICON_SIZE = 32

const MenuAccount = () => {
	return (
		<Gap $size={spaces(4)} $alignCenter>
			<AccountIcon size={ICON_SIZE} color={white} />
			<Text size={fontSizes(16)}>Ppipee</Text>
		</Gap>
	)
}

export default MenuAccount
