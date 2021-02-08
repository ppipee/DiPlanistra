import React, { useState } from 'react'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import usePassQuery from 'common/hooks/usePassQuery'

import { CITIES } from './constant'
import { DropDownWrapper } from './styled'

const BANGKOK_ID = 9681

const ViewGroupSelector = () => {
	const passQuery = usePassQuery()
	const [city, setCity] = useState<string | number>(BANGKOK_ID)

	const onViewGroupChange = (value: string | number) => {
		setCity(value)
		passQuery({ params: { regions: value } })
	}

	return (
		<DropDownWrapper>
			<DropDown value={city} defaultValue={BANGKOK_ID} onChange={onViewGroupChange} withOutlined border="curve">
				{CITIES.map((city) => (
					<DropDownItem key={city.id} value={city.id} name={city.name} />
				))}
			</DropDown>
		</DropDownWrapper>
	)
}

export default ViewGroupSelector
