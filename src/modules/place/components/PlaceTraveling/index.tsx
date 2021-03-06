import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import LocationIcon from 'common/components/icons/LocationIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { red } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'
import getAddress from 'modules/place/utils/getAddress'

import PlaceMap from '../PlaceMap'

import { TRAVELING_TITLE, MAP_TITLE } from './locale'
import { TravelingDetail } from './styled'

const ICON_SIZE = 24

const PlaceTraveling = () => {
	const I18n = useI18n()
	const { titleSize, detailSize } = useFontSizeResponsive()
	const { lat, lng, contact } = usePlaceStore((store) => store.place)

	const coordinate = {
		lat,
		lng,
	}

	const address = getAddress(contact)

	return (
		<ResponsiveBlock $padding={spaces(16)} $paddingMobile={spaces(12)}>
			<Gap $size={spaces(12)} $type="vertical">
				<Text size={titleSize}>{I18n.t(MAP_TITLE)}</Text>
				<PlaceMap {...coordinate} />
				<TravelingDetail $size={spaces(12)} $type="vertical">
					{address && (
						<Gap $size={spaces(4)}>
							<LocationIcon size={ICON_SIZE} color={red[500]} />
							<Text responsive size={detailSize}>
								{address}
							</Text>
						</Gap>
					)}
					<Gap $size={spaces(6)} $type="vertical">
						<Text size={titleSize}>{I18n.t(TRAVELING_TITLE)}</Text>
					</Gap>
				</TravelingDetail>
			</Gap>
		</ResponsiveBlock>
	)
}

export default PlaceTraveling
