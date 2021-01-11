import React, { useCallback } from 'react'

import { isBoolean } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import ATMIcon from 'common/components/icons/ATMIcon'
import ParkIcon from 'common/components/icons/ParkIcon'
import PetIcon from 'common/components/icons/PetIcon'
import RestaurantIcon from 'common/components/icons/RestaurantIcon'
import SouvenirIcon from 'common/components/icons/SouvenirIcon'
import ToiletIcon from 'common/components/icons/ToiletIcon'
import { IconComponent, IconProps } from 'common/components/icons/types'
import WheelChairIcon from 'common/components/icons/WheelChairIcon'
import WifiIcon from 'common/components/icons/WifiIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { TextProps } from 'common/components/Text/types'
import { gray, main } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'

import { FacilitiesProps } from 'modules/place/types/place'
import { PlaceFacility } from 'modules/place/types/place'

import {
	ATM_TEXT,
	CAR_PARKS_TEXT,
	PET_TEXT,
	RESTAURANT_TEXT,
	SOUVENIR_TEXT,
	TOILET_TEXT,
	WIFI_TEXT,
	WHEEL_CHAIR_TEXT,
	TRUE_WALLET_TEXT,
	CREDIT_CARD_TEXT,
} from './locale'
import { FacilitiesContainer } from './styled'

type Props = {
	facilities: FacilitiesProps
}

const FACILITY_ICONS: Record<PlaceFacility, IconComponent> = {
	wifi: WifiIcon,
	attractionRestaurant: RestaurantIcon,
	parkingType: ParkIcon,
	toilet: ToiletIcon,
	atm: ATMIcon,
	souvenir: SouvenirIcon,
	petFriendly: PetIcon,
	wheelchairAccess: WheelChairIcon,
	trueMoneyWallet: WifiIcon,
	creditCardAccept: WifiIcon,
}

const FACILITY_TEXTS: Record<PlaceFacility, string[]> = {
	wifi: WIFI_TEXT,
	attractionRestaurant: RESTAURANT_TEXT,
	parkingType: CAR_PARKS_TEXT,
	toilet: TOILET_TEXT,
	atm: ATM_TEXT,
	souvenir: SOUVENIR_TEXT,
	petFriendly: PET_TEXT,
	wheelchairAccess: WHEEL_CHAIR_TEXT,
	trueMoneyWallet: TRUE_WALLET_TEXT,
	creditCardAccept: CREDIT_CARD_TEXT,
}

const DESKTOP_ICON_SIZE = 20
const MOBILE_ICON_SIZE = 16

const PlaceFacilities = ({ facilities }: Props) => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()
	const { detailSize } = useFontSizeResponsive()

	const getFacilitiesStatus = useCallback((exist: boolean) => {
		let fontProps: TextProps = {}
		const iconProps: IconProps = { color: main[500], size: isDesktop ? DESKTOP_ICON_SIZE : MOBILE_ICON_SIZE }

		if (!exist) {
			iconProps.color = gray[200]
			fontProps = {
				color: gray[200],
				decoration: 'line-through',
			}
		}

		return { fontProps, iconProps }
	}, [])

	return (
		<ResponsiveBlock $padding={spaces(16)} $paddingMobile={spaces(12)}>
			<FacilitiesContainer>
				{Object.keys(facilities).map((facility) => {
					const status = facilities[facility]

					if (!isBoolean(status)) {
						return null
					}

					const FacilityIcon = FACILITY_ICONS[facility]
					const { fontProps, iconProps } = getFacilitiesStatus(status)

					return (
						<Gap $size={spaces(4)} key={`facility-${facility}`} $alignCenter>
							<FacilityIcon {...iconProps} />
							<Text size={detailSize} {...fontProps}>
								{I18n.t(FACILITY_TEXTS[facility])}
							</Text>
						</Gap>
					)
				})}
			</FacilitiesContainer>
		</ResponsiveBlock>
	)
}

export default PlaceFacilities
