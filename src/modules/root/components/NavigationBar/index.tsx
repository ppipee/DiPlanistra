import React from 'react'

import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import DiPlanistraLogo from 'common/images/di-planistra-logo.svg'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import { HOME_PATH } from 'modules/home/routes/paths'

import LinkNavigates from '../LinkNavigates'
// import LocationInput from '../LocationInput'
import MenuAccount from '../MenuAccount'
import MobileMenuBar from '../MobileMenuBar'
import SearchInput from '../SearchInput'
import ViewGroupSelector from '../ViewGroupSelector'

import { NavTemplate, NavWrapper, NavContainer, SearchContainer, Logo } from './styled'

const NavigationBar = () => {
	const { isDesktop } = useResponsive()

	return (
		<>
			<NavWrapper>
				<NavContainer>
					<Gap $alignCenter $size={spaces(20)} $responsive>
						<Link to={HOME_PATH}>
							<Logo src={DiPlanistraLogo} />
						</Link>
						{isDesktop && (
							<SearchContainer $size={spaces(10)} $justifyCenter>
								<ViewGroupSelector />
								<SearchInput />
							</SearchContainer>
						)}
						<LinkNavigates />
						{isDesktop ? <MenuAccount /> : <MobileMenuBar />}
					</Gap>
				</NavContainer>
			</NavWrapper>
			<NavTemplate />
		</>
	)
}

export default NavigationBar
