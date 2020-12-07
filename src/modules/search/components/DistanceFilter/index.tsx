import React from 'react'
import { ReactText, useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import usePassQuery from 'common/hooks/usePassQuery'
import { KM } from 'common/locale'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { DEFAULT_DISTANCE } from 'modules/search/constants'
import { NEAR_BY_ME } from 'modules/search/locale'
import { DistanceFilterType } from 'modules/search/types'

import { LOCALE_DISTANCE_FILTER } from './locale'

const DistanceFilter = () => {
	const I18n = useI18n()
	const passQuery = usePassQuery()
	const { distance } = useQuery()

	const distanceMapper: Record<DistanceFilterType, string> = {
		500: I18n.t(NEAR_BY_ME),
		1000: I18n.t(KM, { distance: 1 }),
		2000: I18n.t(KM, { distance: 2 }),
		3000: I18n.t(KM, { distance: 3 }),
		5000: I18n.t(KM, { distance: 5 }),
	}

	const onDistanceChange = useCallback(
		(value: ReactText) => {
			passQuery({ params: { distance: value } })
		},
		[passQuery],
	)

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_DISTANCE_FILTER)}</Text>
			<DropDown defaultValue={distance || DEFAULT_DISTANCE} onChange={onDistanceChange}>
				<DropDownItem value={500} name={distanceMapper[500]} />
				<DropDownItem value={1000} name={distanceMapper[1000]} />
				<DropDownItem value={2000} name={distanceMapper[2000]} />
				<DropDownItem value={3000} name={distanceMapper[3000]} />
				<DropDownItem value={5000} name={distanceMapper[5000]} />
			</DropDown>
		</Gap>
	)
}

export default DistanceFilter
