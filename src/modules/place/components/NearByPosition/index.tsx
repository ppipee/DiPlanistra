import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import TabsProvider from 'common/components/HorizontalTab/components/TabsProvider'
import CameraIcon from 'common/components/icons/CameraIcon'
import FoodIcon from 'common/components/icons/FoodIcon'
import HotelIcon from 'common/components/icons/HotelIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { DomainValue } from 'common/constants/business'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import NearByCardContainer from 'modules/place/components/NearByCardContainer'
import { NearbyPositionType } from 'modules/place/types/store'

import { NEAR_BY_POSITION_TITLE } from './locale'

const ICON_SIZE = 24

type Props = {
	nearbyPlace: NearbyPositionType
	nearby?: string
	loading?: boolean
	getPlaces: (domain: DomainValue) => void
}

const NearByPosition = ({ nearby, nearbyPlace, loading, getPlaces }: Props) => {
	const I18n = useI18n()
	const tabs = [
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<CameraIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Attraction</Text>
				</Gap>
			),
			value: DomainValue.ATTRACTION,
		},
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<HotelIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Hotel</Text>
				</Gap>
			),
			value: DomainValue.HOTEL,
		},
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<FoodIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Food</Text>
				</Gap>
			),
			value: DomainValue.FOOD,
		},
	]

	return (
		<ResponsiveBlock $padding={`${spaces(16)} 0 0`}>
			<Text margin={`0 ${spaces(16)}`} size={fontSizes(20)}>
				{`${I18n.t(NEAR_BY_POSITION_TITLE)} ${nearby}`}
			</Text>
			<TabsProvider tabs={tabs}>
				<NearByCardContainer {...{ loading, nearbyPlace, getPlaces }} />
			</TabsProvider>
		</ResponsiveBlock>
	)
}

export default NearByPosition
