import React from 'react'

import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import DiPlanistraLogo from 'common/images/di-planistra-logo.svg'
import useResponsive from 'common/styles/hooks/useResponsive'
import { Spaces } from 'common/styles/mixins/spaces'

import { HOME_PATH } from 'modules/home/routes/paths'
import { useMobileSearchInputStore } from 'modules/search/stores/MobileSearchInputStore/context'

import DomainSelector from '../DomainSelector'
import LinkNavigates from '../LinkNavigates'
import MenuAccount from '../MenuAccount'
import MobileMenuBar from '../MobileMenuBar'
import MobileSearch from '../MobileSearch'
import SearchInput from '../SearchInput'
import ViewGroupSelector from '../ViewGroupSelector'

import { NavTemplate, NavWrapper, NavContainer, SearchContainer, Logo } from './styled'

const NavigationBar = () => {
	const { isDesktop } = useResponsive()
	const isMobileSearchOpen = useMobileSearchInputStore((store) => store.isOpen)

	return (
		<>
			<NavWrapper>
				<NavContainer>
					<Gap $alignCenter $size={isDesktop ? Spaces[20] : Spaces[8]} $responsive>
						<Link to={HOME_PATH}>
							<Logo src={DiPlanistraLogo} />
						</Link>
						{isDesktop && (
							<SearchContainer $size={Spaces[10]} $justifyCenter>
								<ViewGroupSelector />
								<Gap $size={Spaces[2]}>
									<DomainSelector />
									<SearchInput />
								</Gap>
							</SearchContainer>
						)}
						<LinkNavigates />
						{isDesktop ? <MenuAccount /> : <MobileMenuBar />}
					</Gap>
				</NavContainer>
			</NavWrapper>
			<NavTemplate />
			{!isDesktop && isMobileSearchOpen && <MobileSearch />}
		</>
	)
}

export default NavigationBar
