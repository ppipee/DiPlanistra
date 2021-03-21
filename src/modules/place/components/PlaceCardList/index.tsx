import React from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import LinkToPlace from 'common/components/url/LinkToPlace'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import PlaceCard from 'modules/place/components/PlaceCard'
import { PLACE_EMPTY } from 'modules/place/locale'
import useDomainTabMobile from 'modules/search/hooks/useDomainTabMobile/index'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import PlaceCardListLoading from './loading'

const PlaceCardList = () => {
	useDomainTabMobile()

	const I18n = useI18n()

	const { places, isLoading, isFresh } = useSearchPlaceStore((store) => ({
		places: store.places,
		isLoading: store.isLoading,
		isFresh: store.isFresh,
	}))

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
