import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import useHandleRadio from 'common/components/RadioGroup/hooks/useHandleRadio'
import Text from 'common/components/Text'
import { DomainValue } from 'common/constants/business'
import usePassQuery from 'common/hooks/usePassQuery'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { EVENTS_ROUTE } from 'modules/event/routes/path'
import { ATTRACTION, EVENT, FOOD, HOTEL, TRIP } from 'modules/place/locale'
import { PLACES_ROUTE } from 'modules/place/routes/paths'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'
import { LOCALE_DOMAIN } from 'modules/search/locale'
import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

const DomainSelector = () => {
	const I18n = useI18n()
	const passQuery = usePassQuery()
	const { domain } = useQuery()

	const passDomain = useCallback(
		(domainValue: string | number) => {
			let targetUrl = PLACES_ROUTE

			if (domainValue === DomainValue.TRIP) {
				targetUrl = TRIPS_ROUTE
			} else if (domainValue === DomainValue.EVENT) {
				targetUrl = EVENTS_ROUTE
			}

			passQuery({ params: { domain: domainValue }, targetUrl })
		},
		[passQuery],
	)

	const { radioValue, onChange } = useHandleRadio(+domain || DEFAULT_PLACE_DOMAIN, [passDomain])

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_DOMAIN)}</Text>
			<RadioGroup onChange={onChange} value={radioValue}>
				<Radio label={I18n.t(TRIP)} value={DomainValue.TRIP} />
				<Radio label={I18n.t(ATTRACTION)} value={DomainValue.ATTRACTION} />
				<Radio label={I18n.t(FOOD)} value={DomainValue.FOOD} />
				<Radio label={I18n.t(HOTEL)} value={DomainValue.HOTEL} />
				<Radio label={I18n.t(EVENT)} value={DomainValue.EVENT} />
			</RadioGroup>
		</Gap>
	)
}

export default DomainSelector
