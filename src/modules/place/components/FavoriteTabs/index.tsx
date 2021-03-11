import React, { HTMLAttributes, ReactNode } from 'react'

import Gap from 'common/components/Gap'
import TabsProvider from 'common/components/HorizontalTab/components/TabsProvider'
import CameraIcon from 'common/components/icons/CameraIcon'
import EventIcon from 'common/components/icons/EventIcon'
import FoodIcon from 'common/components/icons/FoodIcon'
import HotelIcon from 'common/components/icons/HotelIcon'
import Text from 'common/components/Text'
import { DomainValue } from 'common/constants/business'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

const ICON_SIZE = 24

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
	children: ReactNode
}

const FavoriteTab = ({ children, ...props }: Props) => {
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
		{
			tab: (
				<Gap $size={spaces(4)} $alignCenter>
					<EventIcon size={ICON_SIZE} color={gray[700]} />
					<Text size={fontSizes(16)}>Event</Text>
				</Gap>
			),
			value: DomainValue.EVENT,
		},
	]

	return (
		<TabsProvider tabs={tabs} {...props}>
			{children}
		</TabsProvider>
	)
}

export default FavoriteTab
