import React, { ReactText, useCallback, useEffect, useState } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import InputField from 'common/components/field/InputField'
import Gap from 'common/components/Gap'
import SearchIcon from 'common/components/icons/SearchIcon'
import useOnChange from 'common/hooks/useOnChange'
import useOnEnter from 'common/hooks/useOnEnter'
import usePassQuery from 'common/hooks/usePassQuery'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

import { ATTRACTION, HOTEL, FOOD, TRIP } from 'modules/place/locale'
import { PLACE_PATH } from 'modules/place/routes/paths'
import { PlaceDomain } from 'modules/search/constants'

import { DropDownWrapper, InputWrapper } from './styled'

const SearchInput = () => {
	const I18n = useI18n()
	const { domain: domainQuery } = useQuery()
	const passQuery = usePassQuery()
	const [domain, setDomain] = useState(domainQuery || PlaceDomain.Attraction)
	const { keyword, onChange } = useOnChange()

	const onDomainChange = useCallback(
		(value: ReactText) => {
			setDomain(value as PlaceDomain)
			passQuery({ params: { domain: value } })
		},
		[passQuery],
	)

	const onSubmit = useCallback(() => {
		if (isEmpty(keyword)) return

		passQuery({ params: { search: keyword, domain }, targetUrl: PLACE_PATH })
	}, [keyword, passQuery, domain])

	const onEnter = useOnEnter([onSubmit])

	useEffect(() => {
		if (!domainQuery) return

		setDomain(domainQuery)
	}, [domainQuery])

	return (
		<Gap $size={spaces(2)}>
			<DropDownWrapper>
				<DropDown value={domain} defaultValue={domain} onChange={onDomainChange}>
					<DropDownItem value={PlaceDomain.Attraction} name={I18n.t(ATTRACTION)} />
					<DropDownItem value={PlaceDomain.Food} name={I18n.t(FOOD)} />
					<DropDownItem value={PlaceDomain.Hotel} name={I18n.t(HOTEL)} />
					<DropDownItem value={PlaceDomain.Trip} name={I18n.t(TRIP)} />
				</DropDown>
			</DropDownWrapper>
			<InputWrapper>
				<InputField
					$prefixIcon={SearchIcon}
					$iconColor={white}
					$onPrefixClick={onSubmit}
					value={keyword}
					onChange={onChange}
					onKeyPress={onEnter}
				/>
			</InputWrapper>
		</Gap>
	)
}

export default SearchInput
