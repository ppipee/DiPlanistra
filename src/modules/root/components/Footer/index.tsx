import React from 'react'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { FooterContainer, CopyRightText } from './styled'

const Footer = () => {
	return (
		<FooterContainer>
			<Text size={fontSizes(14)} color={gray[700]}>
				<Flex $justifyContent="center" $alignItems="center" $direction="column">
					<Gap $size={spaces(8)}>
						<span>TH</span>
						<span>|</span>
						<span>EN</span>
					</Gap>
					<CopyRightText>copyright 2020, ppipee</CopyRightText>
				</Flex>
			</Text>
		</FooterContainer>
	)
}

export default Footer
