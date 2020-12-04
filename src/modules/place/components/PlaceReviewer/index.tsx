import React, { memo } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { REVIEWS } from 'common/mocks/reivews'
import { white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import ReviewCard from '../ReviewCard'

import { REVIEW_TITLE } from './locale'
import { Container } from './styled'

const PlaceReviewer = () => {
	const I18n = useI18n()
	const { titleSize } = useFontSizeResponsive()
	const reviews = REVIEWS

	return (
		<Container $padding={spaces(16)}>
			<Gap $type="vertical" $size={spaces(20)}>
				<Text color={white} size={titleSize}>
					{I18n.t(REVIEW_TITLE)}
				</Text>
				<Gap $type="vertical" $size={spaces(16)}>
					{reviews.map((review) => (
						<ReviewCard review={review} key={review.id} />
					))}
				</Gap>
			</Gap>
		</Container>
	)
}

export default memo(PlaceReviewer)
