import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import useHandleRadio from 'common/components/RadioGroup/hooks/useHandleRadio'
import Text from 'common/components/Text'
import usePassQuery from 'common/hooks/usePassQuery'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { DEFAULT_TRIP_SORT_BY, TRIP_SORT_BY_VALUE } from 'modules/search/constants'

import { SORT_BY_FILTER, SORT_BY_LIKE, SORT_BY_VIEW } from './locale'

const TripSortBy = () => {
	const I18n = useI18n()

	const { sortby } = useQuery()
	const passQuery = usePassQuery()

	const passSortBy = useCallback(
		(sortbyValue: string | number) => {
			passQuery({ params: { sortby: sortbyValue } })
		},
		[passQuery],
	)

	const { radioValue, onChange } = useHandleRadio(sortby || DEFAULT_TRIP_SORT_BY, [passSortBy])

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(SORT_BY_FILTER)}</Text>
			<RadioGroup onChange={onChange} value={radioValue}>
				<Radio label={I18n.t(SORT_BY_VIEW)} value={TRIP_SORT_BY_VALUE.view} />
				<Radio label={I18n.t(SORT_BY_LIKE)} value={TRIP_SORT_BY_VALUE.like} />
			</RadioGroup>
		</Gap>
	)
}

export default TripSortBy
