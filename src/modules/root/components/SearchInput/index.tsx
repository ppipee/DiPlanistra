import React, { useCallback } from 'react'

import useQuery from 'core/router/hooks/useQuery'

import InputField from 'common/components/field/InputField'
import SearchIcon from 'common/components/icons/SearchIcon'
import { DomainValue } from 'common/constants/business'
import useOnChange from 'common/hooks/useOnChange'
import useOnEnter from 'common/hooks/useOnEnter'
import usePassQuery from 'common/hooks/usePassQuery'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'

import { EVENTS_ROUTE } from 'modules/event/routes/path'
import { PLACES_ROUTE } from 'modules/place/routes/paths'
import { TRIPS_ROUTE } from 'modules/trip/routes/paths'

import { MobileInputWrapper, DesktopInputWrapper } from './styled'

const SearchInput = () => {
	const passQuery = usePassQuery()
	const { isDesktop } = useResponsive()
	const { domain } = useQuery()
	const { keyword, onChange } = useOnChange()

	const onSubmit = useCallback(() => {
		let targetUrl = PLACES_ROUTE

		if (Number(domain) === DomainValue.TRIP) {
			targetUrl = TRIPS_ROUTE
		} else if (Number(domain) === DomainValue.EVENT) {
			targetUrl = EVENTS_ROUTE
		}

		passQuery({ params: { search: keyword, domain }, targetUrl })
	}, [keyword, passQuery, domain])

	const onEnter = useOnEnter([onSubmit])

	const Wrapper = isDesktop ? DesktopInputWrapper : MobileInputWrapper

	return (
		<Wrapper>
			<InputField
				$suffixIcon={SearchIcon}
				$iconColor={isDesktop ? white : null}
				value={keyword}
				onChange={onChange}
				onKeyPress={onEnter}
				$onSuffixClick={onSubmit}
			/>
		</Wrapper>
	)
}

export default SearchInput
