import React, { useEffect, useState } from 'react'

import { omit } from 'lodash'
import { useLocation } from 'react-router-dom'
import { useGeolocation } from 'react-use'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import MyLocationIcon from 'common/components/icons/MyLocationIcon'
import usePassQuery from 'common/hooks/usePassQuery'
import { red } from 'common/styles/colors'
import isSearchPath from 'common/utils/url/isSearchPath'

import { DEFAULT_REGIONS } from 'modules/search/constants'
import { NEAR_BY_ME } from 'modules/search/locale'

import { CITIES } from './constant'
import { DropDownWrapper } from './styled'

const NEAR_ME_VALUE = 0

const ViewGroupSelector = () => {
	const I18n = useI18n()
	const passQuery = usePassQuery()
	const query = useQuery()
	const location = useLocation()
	const [city, setCity] = useState<string | number>(query.regions || DEFAULT_REGIONS)
	const { latitude, longitude } = useGeolocation()

	useEffect(() => {
		if (!query.regions && isSearchPath(location.pathname)) {
			passQuery({ params: { regions: DEFAULT_REGIONS } })
		}
	}, [location.pathname])

	const onViewGroupChange = (value: string | number) => {
		setCity(value)

		const oldQuery = omit(query, value === NEAR_ME_VALUE ? ['regions'] : ['latitude', 'longitude'])
		const valueQuery = value === NEAR_ME_VALUE ? { latitude, longitude } : { regions: value }

		passQuery({ params: { ...oldQuery, ...valueQuery }, withOldQuery: false })
	}

	return (
		<DropDownWrapper>
			<DropDown value={city} onChange={onViewGroupChange} withOutlined border="curve">
				{[
					<DropDownItem key={0} value={NEAR_ME_VALUE} name={I18n.t(NEAR_BY_ME)}>
						<MyLocationIcon color={red[500]} size={24} />
					</DropDownItem>,
					...CITIES.map((city) => <DropDownItem key={city.id} value={city.id} name={city.name} />),
				]}
			</DropDown>
		</DropDownWrapper>
	)
}

export default ViewGroupSelector
