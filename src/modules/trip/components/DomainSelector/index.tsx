import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import useHandleRadio from 'common/components/RadioGroup/hooks/useHandleRadio'
import { DomainValue } from 'common/constants/business'
import { Spaces } from 'common/styles/mixins/spaces'

import { ATTRACTION, EVENT, FOOD, HOTEL } from 'modules/place/locale'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'
import useDomainSelector from 'modules/trip/hooks/useDomainSelector/index'

const DomainSelector = () => {
	const I18n = useI18n()
	const { domain, setDomain } = useDomainSelector()

	const onRadioChange = useCallback(
		(domainValue: string | number) => {
			setDomain(Number(domainValue))
		},
		[setDomain],
	)

	const { radioValue, onChange } = useHandleRadio(+domain || DEFAULT_PLACE_DOMAIN, [onRadioChange])

	return (
		<RadioGroup onChange={onChange} value={radioValue} type="grid" size={Spaces[8]}>
			<Radio label={I18n.t(ATTRACTION)} value={DomainValue.ATTRACTION} />
			<Radio label={I18n.t(FOOD)} value={DomainValue.FOOD} />
			<Radio label={I18n.t(HOTEL)} value={DomainValue.HOTEL} />
			<Radio label={I18n.t(EVENT)} value={DomainValue.EVENT} />
		</RadioGroup>
	)
}

export default DomainSelector
