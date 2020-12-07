import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import StickyContainer from 'common/components/StickyContainer'
import { PLACE_HIGHLIGHTS } from 'common/mocks/plcaeHighlights'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import LinkToPlace from 'common/utils/url/LinkToPlace'

import PlaceCard from 'modules/place/components/PlaceCard'
import PlacesFilter from 'modules/search/components/PlacesFilter'
import SearchingText from 'modules/search/components/SearchingText'

import { ContainerWrapper } from './styled'

const PlacesPageComponent = () => {
	const { isDesktop } = useResponsive()
	const places = PLACE_HIGHLIGHTS

	return (
		<ContentContainer>
			<SearchingText />
			<Gap $size={spaces(16)}>
				{isDesktop && (
					<ContainerWrapper type="filter">
						<StickyContainer>
							<PlacesFilter />
						</StickyContainer>
					</ContainerWrapper>
				)}
				<ContainerWrapper type="main">
					<Gap $type="vertical" $size={spaces(12)}>
						{places.map((place) => (
							<LinkToPlace key={place.id} placeId={place.publicId}>
								<PlaceCard place={place} />
							</LinkToPlace>
						))}
					</Gap>
				</ContainerWrapper>
				{isDesktop && <ContainerWrapper type="sub" />}
			</Gap>
		</ContentContainer>
	)
}

export default PlacesPageComponent
