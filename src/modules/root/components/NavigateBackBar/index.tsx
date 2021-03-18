import React from 'react'

import Gap from 'common/components/Gap'
import IconButton from 'common/components/IconButton'
import ArrowIcon from 'common/components/icons/ArrowIcon'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import { Spaces } from 'common/styles/mixins/spaces'

import { NAV_ICON_SIZE, NAV_MOBILE_ICON_SIZE } from 'modules/root/constants'

import { NavWrapper, NavContainer } from '../NavigationBar/styled'

import { IconWrapper } from './styled'

type Props = {
	back: () => void
	title?: string
}

const NavigateBackBar = ({ title, back }: Props) => {
	return (
		<NavWrapper>
			<NavContainer>
				<Gap $alignCenter $size={Spaces[8]}>
					<IconWrapper>
						<IconButton $size={NAV_ICON_SIZE} onClick={back}>
							<ArrowIcon size={NAV_MOBILE_ICON_SIZE} />
						</IconButton>
					</IconWrapper>
					{title && <Text size={fontSizes(20)}>{title}</Text>}
				</Gap>
			</NavContainer>
		</NavWrapper>
	)
}

export default NavigateBackBar
