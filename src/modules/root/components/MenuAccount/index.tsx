import React from 'react'

import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import AccountIcon from 'common/components/icons/AccountIcon'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import useUser from 'modules/user/hooks/useUser'
import { LOGIN, REGISTER } from 'modules/user/locale'
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'modules/user/routes/paths'

const ICON_SIZE = 32

const MenuAccount = () => {
	const user = useUser()
	const I18n = useI18n()

	return (
		<Gap $size={spaces(4)} $alignCenter>
			{user ? (
				<>
					<AccountIcon size={ICON_SIZE} color={white} />
					<Text size={fontSizes(16)}>{user.name}</Text>
				</>
			) : (
				<>
					<Link to={LOGIN_ROUTE}>
						<Text size={fontSizes(14)}>{I18n.t(LOGIN)}</Text>
					</Link>
					<Text size={fontSizes(14)}>|</Text>
					<Link to={REGISTER_ROUTE}>
						<Text size={fontSizes(14)}>{I18n.t(REGISTER)}</Text>
					</Link>
				</>
			)}
		</Gap>
	)
}

export default MenuAccount
