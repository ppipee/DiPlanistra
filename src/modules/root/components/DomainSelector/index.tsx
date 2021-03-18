import React from 'react'
import { ReactText, useCallback, useState, useEffect } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import { DomainValue } from 'common/constants/business'
import usePassQuery from 'common/hooks/usePassQuery'
import useResponsive from 'common/styles/hooks/useResponsive'

import { ATTRACTION, HOTEL, FOOD, TRIP, EVENT } from 'modules/place/locale'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'

import { DropDownDesktopWrapper, DropdownMobileWrapper } from './styled'

const DomainSelector = () => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()
	const { domain: domainQuery } = useQuery()
	const passQuery = usePassQuery()

	const [domain, setDomain] = useState(+domainQuery || DEFAULT_PLACE_DOMAIN)

	const onDomainChange = useCallback(
		(value: ReactText) => {
			setDomain(+value as DomainValue)
			passQuery({ params: { domain: value } })
		},
		[passQuery],
	)

	useEffect(() => {
		if (!domainQuery) return

		setDomain(+domainQuery)
	}, [domainQuery])

	const Wrapper = isDesktop ? DropDownDesktopWrapper : DropdownMobileWrapper

	return (
		<Wrapper>
			<DropDown
				value={domain}
				defaultValue={domain}
				onChange={onDomainChange}
				withOutlined
				displayCenter
				border={isDesktop ? 'curve' : 'default'}
			>
				<DropDownItem value={DomainValue.TRIP} name={I18n.t(TRIP)} />
				<DropDownItem value={DomainValue.ATTRACTION} name={I18n.t(ATTRACTION)} />
				<DropDownItem value={DomainValue.FOOD} name={I18n.t(FOOD)} />
				<DropDownItem value={DomainValue.HOTEL} name={I18n.t(HOTEL)} />
				<DropDownItem value={DomainValue.EVENT} name={I18n.t(EVENT)} />
			</DropDown>
		</Wrapper>
	)
}

export default DomainSelector
