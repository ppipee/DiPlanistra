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

import { DEFAULT_RATING, RATING_VALUE } from 'modules/search/constants'

import { LOCALE_RATING_FILTER } from './locale'

const RatingFilter = () => {
	const I18n = useI18n()

	const { rating } = useQuery()
	const passQuery = usePassQuery()

	const passRating = useCallback(
		(ratingValue: string | number) => {
			passQuery({ params: { rating: ratingValue } })
		},
		[passQuery],
	)

	const { radioValue, onChange } = useHandleRadio(rating || DEFAULT_RATING, [passRating])

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_RATING_FILTER)}</Text>
			<RadioGroup onChange={onChange} value={radioValue}>
				<Radio label="3.5+" value={RATING_VALUE['3.5']} />
				<Radio label="4.0+" value={RATING_VALUE['4.0']} />
			</RadioGroup>
		</Gap>
	)
}

export default RatingFilter
