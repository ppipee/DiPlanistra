import React, { useCallback } from 'react'

import { isArray } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Checkbox from 'common/components/Checkbox'
import CheckboxGroup from 'common/components/CheckboxGroup'
import useHandleCheckbox from 'common/components/CheckboxGroup/hooks/useHandleCheckbox'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { ALL_VALUE } from 'common/constants/selector'
import usePassQuery from 'common/hooks/usePassQuery'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { DEFAULT_RATING } from 'modules/search/constants'

import { LOCALE_RATING_FILTER } from './locale'

const RatingFilter = () => {
	const I18n = useI18n()

	const { rating: queryRating } = useQuery()
	const passQuery = usePassQuery()

	const passRating = useCallback(
		(rating: string, moreRating: string[]) => {
			const params = { rating: moreRating }
			passQuery({ params })
		},
		[passQuery],
	)

	const rating = queryRating && (isArray(queryRating) ? queryRating : [queryRating])
	const allValue = ALL_VALUE

	const { onChange, checkboxValues } = useHandleCheckbox(rating || [DEFAULT_RATING], [passRating], allValue)

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_RATING_FILTER)}</Text>
			<CheckboxGroup onChange={onChange} values={checkboxValues} withAllSelector allValue={allValue}>
				<Checkbox label="3.0+" value="3" />
				<Checkbox label="3.5+" value="3.5" />
				<Checkbox label="4.0+" value="4" />
			</CheckboxGroup>
		</Gap>
	)
}

export default RatingFilter
