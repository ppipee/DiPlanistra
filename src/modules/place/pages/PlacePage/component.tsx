import React from 'react'

import { isEmpty, isNil } from 'lodash'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import StickyContainer from 'common/components/StickyContainer'
import { PLACE_HIGHLIGHT } from 'common/mocks/placeHighlight'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'

import NearByPosition from 'modules/place/components/NearByPosition'
import PlaceContact from 'modules/place/components/PlaceContact'
import PlaceEntryFee from 'modules/place/components/PlaceEntryFee'
import PlaceFacilities from 'modules/place/components/PlaceFacilities'
import PlaceHeader from 'modules/place/components/PlaceHeader'
import PlaceReviewer from 'modules/place/components/PlaceReviewer'
import PlaceTraveling from 'modules/place/components/PlaceTraveling'
import PlaceWorkingHour from 'modules/place/components/PlaceWorkingHour'
import { FacilitiesProps } from 'modules/place/types'

import { Container } from './styled'

const PlacePageComponent = () => {
	const { isDesktop } = useResponsive()

	const place = PLACE_HIGHLIGHT
	const facilities: FacilitiesProps = {
		wifi: isNil(PLACE_HIGHLIGHT.wifi) ? null : true,
		attractionRestaurant: isNil(PLACE_HIGHLIGHT.attractionInformation?.attractionRestaurant) ? null : true,
		parkingType: isNil(PLACE_HIGHLIGHT.parkingType) ? null : true,
		toilet: PLACE_HIGHLIGHT.attractionInformation?.toilet,
		atm: PLACE_HIGHLIGHT.attractionInformation?.atm,
		souvenir: PLACE_HIGHLIGHT.attractionInformation?.souvenir,
		petFriendly: PLACE_HIGHLIGHT.petFriendly,
		wheelchairAccess: PLACE_HIGHLIGHT.attractionInformation?.wheelchairAccess,
		trueMoneyWallet: PLACE_HIGHLIGHT.trueMoneyWallet,
		creditCardAccept: PLACE_HIGHLIGHT.creditCardAccepted,
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
									<PlaceTraveling />
									<PlaceReviewer />
								</Gap>
							</Container>
						)}
						<Container>
							<StickyContainer>
								<Gap $type="vertical" $size={isDesktop ? spaces(8) : spaces(4)}>
									<PlaceEntryFee />
									{!isDesktop && <PlaceTraveling />}
									{place.hours && <PlaceWorkingHour hours={place.hours} />}
									{!isEmpty(filterObjectExistingValues(facilities)) && <PlaceFacilities facilities={facilities} />}
									<PlaceContact />
								</Gap>
							</StickyContainer>
						</Container>
					</Gap>
				</Gap>
				{!isDesktop && <PlaceReviewer />}
				<NearByPosition places={PLACE_HIGHLIGHTS} nearby={place.displayName} />
			</Gap>
		</ContentContainer>
	)
}

export default PlacePageComponent
