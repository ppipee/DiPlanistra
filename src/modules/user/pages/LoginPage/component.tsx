import React from 'react'

import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import { BackgroundPage } from 'common/components/BackgroundPage'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Position from 'common/components/Position'
import SeparatorLine from 'common/components/SeparatorLine'
import Text from 'common/components/Text'
import DiPlanistraLogo from 'common/images/di-planistra-logo.svg'
import { gray, white, green, main } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import LoginForm from 'modules/user/components/LoginForm'
import ThirdPartyLogin from 'modules/user/components/ThirdPartyLogin'
import { DONT_HAVE_AN_ACCOUNT, FORGOT_PASSWORD, GO_TO_REGISTER, OR } from 'modules/user/locale'
import { REGISTER_ROUTE } from 'modules/user/routes/paths'

import { Logo, Container, SeparatorContainer } from './styled'

const LoginPageComponent = () => {
	const I18n = useI18n()
	const { detailSize } = useFontSizeResponsive()

	return (
		<div>
			<BackgroundPage $background={`linear-gradient(191.27deg, ${main[500]} 24.41%, ${green[500]} 119.19%)`} />
			<Flex $direction="column" $alignItems="center" $justifyContent="center" $responsive>
				<Logo src={DiPlanistraLogo} />
				<Container $direction="column" $alignItems="stretch">
					<LoginForm />
					<Text as="div" color={white} size={detailSize} margin={`${spaces(24)} 0 0`}>
						{I18n.t(FORGOT_PASSWORD)}
					</Text>
					<SeparatorContainer>
						<SeparatorLine color={white} variant="horizontalCustom" spacing={`${spaces(4)} ${spaces(32)} 0 0`} />
						<Position $position="absolute" $center>
							<Text as="div" color={white} size={detailSize}>
								{I18n.t(OR)}
							</Text>
						</Position>
						<SeparatorLine color={white} variant="horizontalCustom" spacing={`${spaces(4)} 0 0`} />
					</SeparatorContainer>
					<ThirdPartyLogin />
					<Text as="div" size={detailSize} margin={`${spaces(24)} 0 0`} weight="bold">
						<Gap $size={spaces(10)} $justifyCenter>
							<Text color={gray[900]}>{I18n.t(DONT_HAVE_AN_ACCOUNT)}</Text>
							<Link to={REGISTER_ROUTE}>
								<Text color={white}>{I18n.t(GO_TO_REGISTER)}</Text>
							</Link>
						</Gap>
					</Text>
				</Container>
			</Flex>
		</div>
	)
}

export default LoginPageComponent
