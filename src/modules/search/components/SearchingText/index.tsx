import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { ATTRACTION, HOTEL, FOOD, TRIP } from 'modules/place/locale'
import { PlaceDomain } from 'modules/search/constants'
import { LOCATION_SUFFIX_TEXT } from 'modules/search/locale'

const PLACE_TITLE: Record<PlaceDomain, string[]> = {
	attraction: ATTRACTION,
	hotel: HOTEL,
	food: FOOD,
	trip: TRIP,
}

const SearchingText = () => {
	const I18n = useI18n()
	const { domain, search, nearby } = useQuery()
	const searchText = search ? `: ${search}` : ''
	const nearbyText = nearby ? I18n.t(LOCATION_SUFFIX_TEXT) + nearby : ''
	const domainText = domain ? I18n.t(PLACE_TITLE[domain]) : ''

	return (
		<Text as="div" size={fontSizes(20)} margin={`${spaces(16)} 0 ${spaces(20)}`}>
			{filterArrayExistingValue([domainText, searchText, nearbyText]).join(' ')}
		</Text>
	)
}

export default SearchingText
