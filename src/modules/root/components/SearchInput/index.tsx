import React, { ReactText, useCallback, useEffect, useState } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import InputField from 'common/components/field/InputField'
import Gap from 'common/components/Gap'
import SearchIcon from 'common/components/icons/SearchIcon'
import { DomainValue } from 'common/constants/business'
import useOnChange from 'common/hooks/useOnChange'
import useOnEnter from 'common/hooks/useOnEnter'
import usePassQuery from 'common/hooks/usePassQuery'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import { EVENTS_ROUTE } from 'modules/event/routes/path'
import { ATTRACTION, HOTEL, FOOD, TRIP, EVENT } from 'modules/place/locale'
import { PLACES_ROUTE } from 'modules/place/routes/paths'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'
import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

import { DropDownWrapper, InputWrapper } from './styled'

const SearchInput = () => {
	const I18n = useI18n()
	const { domain: domainQuery } = useQuery()
	const passQuery = usePassQuery()
	const [domain, setDomain] = useState(+domainQuery || DEFAULT_PLACE_DOMAIN)
	const { keyword, onChange } = useOnChange()

	const onDomainChange = useCallback(
		(value: ReactText) => {
			setDomain(+value as DomainValue)
			passQuery({ params: { domain: value } })
		},
		[passQuery],
	)

	const onSubmit = useCallback(() => {
		let targetUrl = PLACES_ROUTE

		if (domain === DomainValue.TRIP) {
			targetUrl = TRIPS_ROUTE
		} else if (domain === DomainValue.EVENT) {
			targetUrl = EVENTS_ROUTE
		}

		passQuery({ params: { search: keyword, domain }, targetUrl })
	}, [keyword, passQuery, domain])

	const onEnter = useOnEnter([onSubmit])

	useEffect(() => {
		if (!domainQuery) return

		setDomain(+domainQuery)
	}, [domainQuery])

	return (
		<Gap $size={spaces(2)}>
			<DropDownWrapper>
				<DropDown
					value={domain}
					defaultValue={domain}
					onChange={onDomainChange}
					withOutlined
					displayCenter
					border="curve"
				>
					<DropDownItem value={DomainValue.TRIP} name={I18n.t(TRIP)} />
					<DropDownItem value={DomainValue.ATTRACTION} name={I18n.t(ATTRACTION)} />
					<DropDownItem value={DomainValue.FOOD} name={I18n.t(FOOD)} />
					<DropDownItem value={DomainValue.HOTEL} name={I18n.t(HOTEL)} />
					<DropDownItem value={DomainValue.EVENT} name={I18n.t(EVENT)} />
				</DropDown>
			</DropDownWrapper>
			<InputWrapper>
				<InputField
					$suffixIcon={SearchIcon}
					$iconColor={white}
					value={keyword}
					onChange={onChange}
					onKeyPress={onEnter}
					$onSuffixClick={onSubmit}
				/>
			</InputWrapper>
		</Gap>
	)
}

export default SearchInput
