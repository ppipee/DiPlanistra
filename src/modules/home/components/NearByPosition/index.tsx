import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import TabsProvider from 'common/components/HorizontalTab/components/TabsProvider'
import CameraIcon from 'common/components/icons/CameraIcon'
import FoodIcon from 'common/components/icons/FoodIcon'
import HotelIcon from 'common/components/icons/HotelIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import NearByCardContainer from 'modules/nearby/components/NearByCardContainer'

import { NEAR_BY_POSITION_TITLE } from './locale'

const ICON_SIZE = 24

const NearByPosition = () => {
	const I18n = useI18n()
	const tabs = [
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<HotelIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Hotel</Text>
				</Gap>
			),
			value: 'hotel',
		},
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<CameraIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Attraction</Text>
				</Gap>
			),
			value: 'attraction',
		},
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<FoodIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Food</Text>
				</Gap>
			),
			value: 'attraction',
		},
	]

	return (
		<ResponsiveBlock $padding={`${spaces(16)} 0 0`} $paddingMobile="0">
			<Text margin={`0 ${spaces(16)}`} size={fontSizes(20)}>
				{I18n.t(NEAR_BY_POSITION_TITLE)}
			</Text>
			<TabsProvider tabs={tabs}>
				<NearByCardContainer places={PLACE_HIGHLIGHTS} />
			</TabsProvider>
		</ResponsiveBlock>
	)
}

export default NearByPosition
