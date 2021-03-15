import React from 'react'

import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import { BackgroundPage } from 'common/components/BackgroundPage'
import Gap from 'common/components/Gap'
import LoadingModal from 'common/components/LoadingModal'
import Text from 'common/components/Text'
import DiPlanistraLogo from 'common/images/di-planistra-logo.svg'
import { gray, main, white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import RegisterForm from 'modules/user/components/RegisterForm'
import { ALREADY_MEMBER, GO_TO_LOGIN } from 'modules/user/locale'
import { LOGIN_ROUTE } from 'modules/user/routes/paths'
import { useUserStore } from 'modules/user/stores/UserStore/context'

import { HeaderBackground, Logo } from './styled'

const RegisterPageComponent = () => {
	const I18n = useI18n()
	const { detailSize } = useFontSizeResponsive()

	const isLoading = useUserStore((store) => store.isActionLoading['register'])

	return (
		<>
			<div>
				<BackgroundPage $background={white} />
				<Gap $size={spaces(64)} $type="vertical" $responsive>
					<HeaderBackground $alignItems="center" $justifyContent="center">
						<Logo src={DiPlanistraLogo} />
					</HeaderBackground>
					<RegisterForm />
					<Text as="div" size={detailSize} margin={'auto 0 0'} weight="bold">
						<Gap $size={spaces(10)} $justifyCenter>
							<Text color={gray[900]}>{I18n.t(ALREADY_MEMBER)}</Text>
							<Link to={LOGIN_ROUTE}>
								<Text color={main[500]}>{I18n.t(GO_TO_LOGIN)}</Text>
							</Link>
						</Gap>
					</Text>
				</Gap>
			</div>
			{isLoading && <LoadingModal />}
		</>
	)
}

export default RegisterPageComponent
