import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Text from 'common/components/Text'
import { DomainValue } from 'common/constants/business'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { ATTRACTION, HOTEL, FOOD, TRIP, EVENT } from 'modules/place/locale'
import { LOCATION_SUFFIX_TEXT } from 'modules/search/locale'

const PLACE_TITLE: Partial<Record<DomainValue, string[]>> = {
	[DomainValue.ATTRACTION]: ATTRACTION,
	[DomainValue.HOTEL]: HOTEL,
	[DomainValue.FOOD]: FOOD,
	[DomainValue.EVENT]: EVENT,
	[DomainValue.TRIP]: TRIP,
}

const SearchingText = () => {
	const I18n = useI18n()
	const { domain, search, nearby } = useQuery()
	const searchText = search ? `: ${search}` : ''
	const nearbyText = nearby ? I18n.t(LOCATION_SUFFIX_TEXT) + nearby : ''
	const domainText = domain ? I18n.t(PLACE_TITLE[domain]) : ''

	return (
		<Text as="div" size={fontSizes(20)} margin={`${spaces(16)} ${spaces(12)} ${spaces(20)}`}>
			{filterArrayExistingValue([domainText, searchText, nearbyText]).join(' ')}
		</Text>
	)
}

export default SearchingText
