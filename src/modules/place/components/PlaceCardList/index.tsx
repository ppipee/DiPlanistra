import React, { useEffect } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import useHorizontalTabContext from 'common/components/HorizontalTab/hooks/useHorizontalTabContext'
import Text from 'common/components/Text'
import LinkToPlace from 'common/components/url/LinkToPlace'
import { gray } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import PlaceCard from 'modules/place/components/PlaceCard'
import { PLACE_EMPTY } from 'modules/place/locale'
import useDomain from 'modules/search/hooks/useDomain'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import PlaceCardListLoading from './loading'

const PlaceCardList = () => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()
	const passQuery = useDomain()

	const { places, isLoading, isFresh } = useSearchPlaceStore((store) => ({
		places: store.places,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

	const tabContext = useHorizontalTabContext()

	useEffect(() => {
		if (isDesktop || !tabContext) return

		const { activeTab: domain } = tabContext
		passQuery(domain)
	}, [tabContext?.activeTab, passQuery])

	if (isFresh || isLoading) return <PlaceCardListLoading />

	if (isEmpty(places)) {
		return (
			<Text as="div" className="margin-top-48" textAlign="center" color={gray[500]} size={fontSizes(24)}>
				{I18n.t(PLACE_EMPTY)}
			</Text>
		)
	}

	return (
		<Gap $type="vertical" $size={spaces(12)}>
			{places.map((place) => (
				<LinkToPlace key={place.id} placeId={place.publicId}>
					<PlaceCard place={place} />
				</LinkToPlace>
			))}
		</Gap>
	)
}

export default PlaceCardList
