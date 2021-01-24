import React from 'react'

import { Link } from 'react-router-dom'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Position from 'common/components/Position'
import SeparatorLine from 'common/components/SeparatorLine'
import Text from 'common/components/Text'
import DiPlanistraLogo from 'common/images/di-planistra-logo.svg'
import { gray, white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import LoginForm from 'modules/user/components/LoginForm'
import ThirdPartyLogin from 'modules/user/components/ThirdPartyLogin'
import { REGISTER_ROUTE } from 'modules/user/routes/paths'

import { DONT_HAVE_A_ACCOUNT, FORGOT_PASSWORD, GO_TO_REGISTER, OR } from '../../locale'

import { BackgroundWrapper, Logo, Container, SeparatorContainer } from './styled'

const LoginPageComponent = () => {
	const I18n = useI18n()
	const { detailSize } = useFontSizeResponsive()

	return (
		<BackgroundWrapper>
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
					<Text as="div" size={detailSize} margin={`${spaces(24)} 0 0`}>
						<Gap $size={spaces(10)} $justifyCenter>
							<Text color={gray[900]}>{I18n.t(DONT_HAVE_A_ACCOUNT)}</Text>
							<Link to={REGISTER_ROUTE}>
								<Text color={white}>{I18n.t(GO_TO_REGISTER)}</Text>
							</Link>
						</Gap>
					</Text>
				</Container>
			</Flex>
		</BackgroundWrapper>
	)
}

export default LoginPageComponent
