import React from 'react'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import LinkNavigates from '../LinkNavigates'
import LocationInput from '../LocationInput'
import MenuAccount from '../MenuAccount'
import SearchInput from '../SearchInput'

import { NavTemplate, NavWrapper, NavContainer, SearchContainer } from './styled'

const NavigationBar = () => {
	return (
		<>
			<NavWrapper>
				<NavContainer>
					<Gap $alignCenter $size={spaces(20)} $responsive>
						<Text size={fontSizes(20)}>Di Planis</Text>
						<SearchContainer $size={spaces(10)} $justifyCenter>
							<LocationInput />
							<SearchInput />
						</SearchContainer>
						<LinkNavigates />
						<MenuAccount />
					</Gap>
				</NavContainer>
			</NavWrapper>
			<NavTemplate />
		</>
	)
}

export default NavigationBar
