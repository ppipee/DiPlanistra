import React from 'react'

import MenuIcon from 'common/components/icons/MenuIcon'
import { white } from 'common/styles/colors'

import { NAV_ICON_SIZE } from 'modules/root/constants'

const MobileMenuBar = () => {
	return <MenuIcon size={NAV_ICON_SIZE} color={white} />
}

export default MobileMenuBar
