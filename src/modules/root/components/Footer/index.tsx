import React, { useCallback } from 'react'

import useSetLocale from 'core/locale/hooks/useSetLocale'

import ClickableBlock from 'common/components/ClickableBlock'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { FooterContainer, CopyRightText } from './styled'

const Footer = () => {
	const setLocale = useSetLocale()

	const setTH = useCallback(() => {
		setLocale('th')
	}, [])

	const setEN = useCallback(() => {
		setLocale('en')
	}, [])

	return (
		<FooterContainer>
			<Text className="footer-color" size={fontSizes(14)} color={gray[700]}>
				<Flex $justifyContent="center" $alignItems="center" $direction="column">
					<Gap $size={spaces(8)} $alignCenter>
						<ClickableBlock onClick={setTH}>TH</ClickableBlock>
						<span>|</span>
						<ClickableBlock onClick={setEN}>EN</ClickableBlock>
					</Gap>
					<CopyRightText>copyright 2020, ppipee</CopyRightText>
				</Flex>
			</Text>
		</FooterContainer>
	)
}

export default Footer
