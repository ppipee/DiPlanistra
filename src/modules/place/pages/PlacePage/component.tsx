import React from 'react'

import { isEmpty, isNil } from 'lodash'

import asRoute from 'core/router/hoc/asRoute'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import StickyContainer from 'common/components/StickyContainer'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import NearbyPlace from 'modules/place/components/NearbyPlace'
import PlaceContact from 'modules/place/components/PlaceContact'
import PlaceEntryFee from 'modules/place/components/PlaceEntryFee'
import PlaceFacilities from 'modules/place/components/PlaceFacilities'
import PlaceHeader from 'modules/place/components/PlaceHeader'
import PlaceReviewer from 'modules/place/components/PlaceReviewer'
import PlaceTraveling from 'modules/place/components/PlaceTraveling'
import PlaceWorkingHour from 'modules/place/components/PlaceWorkingHour'
import useGetPlace from 'modules/place/hooks/useGetPlace'
import usePlaceError from 'modules/place/hooks/usePlaceError'
import NearbyPositionStoreConfig from 'modules/place/stores/NearbyPositionStore'
import PlaceStoreConfig from 'modules/place/stores/PlaceStore'
import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'
import { FacilitiesProps } from 'modules/place/types/place'

import { Container } from './styled'

const PlacePageComponent = () => {
	const { isDesktop } = useResponsive()

	const { isLoading, isFresh } = usePlaceStore((store) => ({
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))
	const { place } = useGetPlace()

	const error = usePlaceError()

	if (error) return <ErrorPage errorMessage={error?.message} />

	if (isLoading || isFresh) return null

	const facilities: FacilitiesProps = {
		wifi: isNil(place?.wifi) ? null : true,
		attractionRestaurant: isNil(place?.attractionInformation?.attractionRestaurant) ? null : true,
		parkingType: isNil(place.parkingType) ? null : true,
		toilet: place?.attractionInformation?.toilet,
		atm: place?.attractionInformation?.atm,
		souvenir: place?.attractionInformation?.souvenir,
		petFriendly: place.petFriendly,
		wheelchairAccess: place?.attractionInformation?.wheelchairAccess,
		trueMoneyWallet: place.trueMoneyWallet,
		creditCardAccept: place.creditCardAccepted,
	}

	return (
		<ContentContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(20) : '0'}>
				<Gap $type="vertical" $size={isDesktop ? spaces(20) : spaces(10)}>
					<PlaceHeader place={place} />
					<Gap $size={spaces(16)}>
						{isDesktop && (
							<Container $isMain>
								<Gap $type="vertical" $size={spaces(24)}>
									<PlaceReviewer />
								</Gap>
							</Container>
						)}
						<Container>
							<StickyContainer>
								<Gap $type="vertical" $size={isDesktop ? spaces(16) : spaces(4)}>
									<PlaceEntryFee />
									<PlaceTraveling />
									{place.hours && <PlaceWorkingHour hours={place.hours} />}
									{!isEmpty(filterObjectExistingValues(facilities)) && <PlaceFacilities facilities={facilities} />}
									<PlaceContact />
								</Gap>
							</StickyContainer>
						</Container>
					</Gap>
				</Gap>
				{!isDesktop && <PlaceReviewer />}
				<NearbyPlace />
			</Gap>
		</ContentContainer>
	)
}

export default asRoute(PlacePageComponent, {
	stores: {
		nearbyPositionStore: NearbyPositionStoreConfig,
		placeStore: PlaceStoreConfig,
	},
})
