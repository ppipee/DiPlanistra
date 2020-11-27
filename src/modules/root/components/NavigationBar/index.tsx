import React from 'react'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import LinkNavigates from '../LinkNavigates'
import LocationInput from '../LocationInput'
import MenuAccount from '../MenuAccount'
import MobileMenuBar from '../MobileMenuBar'
import SearchInput from '../SearchInput'

import { NavTemplate, NavWrapper, NavContainer, SearchContainer } from './styled'

const NavigationBar = () => {
	const { isDesktop } = useResponsive()

	return (
		<>
			<NavWrapper>
				<NavContainer>
					<Gap $alignCenter $size={spaces(20)} $responsive>
						<Text size={fontSizes(20)}>Di Planis</Text>
						{isDesktop && (
							<SearchContainer $size={spaces(10)} $justifyCenter>
								<LocationInput />
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
