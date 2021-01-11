import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'
import convertCurrency from 'common/utils/convertCurrency'

import { ADULT, ADULT_ENTRY_FEE, CHILD, CHILD_ENTRY_FEE } from 'modules/place/locale'
import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

import { ENTRY_FEE_TITLE } from './locale'
import { EntryContainer } from './styled'

const PlaceEntryFee = () => {
	const I18n = useI18n()
	const { titleSize, detailSize } = useFontSizeResponsive()
	const place = usePlaceStore((store) => store.place)

	const entryFee = place.attractionInformation?.entryFee
	const currency = convertCurrency(entryFee.currency) ? I18n.t(convertCurrency(entryFee.currency)) : entryFee.currency

	if (!entryFee) return null
	return (
		<ResponsiveBlock $padding={spaces(16)} $paddingMobile={spaces(12)}>
			<Gap $type="vertical" $size={spaces(8)}>
				<Text size={titleSize}>{I18n.t(ENTRY_FEE_TITLE)}</Text>
				<Text whiteSpace="pre" size={detailSize} color={gray[700]}>
					<EntryContainer $type="vertical" $size={spaces(4)}>
						<Flex $justifyContent="space-between">
							<span>{I18n.t(ADULT)}</span>
							<span>{I18n.t(ADULT_ENTRY_FEE, { fee: entryFee.adult, currency })}</span>
						</Flex>
						<Flex $justifyContent="space-between">
							<span>{I18n.t(CHILD)}</span>
							<span>{I18n.t(CHILD_ENTRY_FEE, { fee: entryFee.children, currency })}</span>
						</Flex>
					</EntryContainer>
				</Text>
				{entryFee.feeCondition && <Text size={detailSize} color={gray[700]}>{`* ${entryFee.feeCondition}`}</Text>}
			</Gap>
		</ResponsiveBlock>
	)
}

export default PlaceEntryFee
