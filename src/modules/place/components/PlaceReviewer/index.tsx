import React, { memo } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Block from 'common/components/Block'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray, white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

import ReviewCard from '../ReviewCard'

import { REVIEW_TITLE, REVIEWS_EMPTY } from './locale'
import { Container } from './styled'

const PlaceReviewer = () => {
	const I18n = useI18n()
	const { titleSize } = useFontSizeResponsive()
	const reviews = usePlaceStore((store) => store.reviews)

	return (
		<Container $padding={spaces(16)}>
			<Gap $type="vertical" $size={spaces(20)}>
				<Text color={white} size={titleSize}>
					{I18n.t(REVIEW_TITLE)}
				</Text>
				<Gap $type="vertical" $size={spaces(16)}>
					{!isEmpty(reviews) ? (
						reviews.map((review) => <ReviewCard review={review} key={review.id} />)
					) : (
						<Block $padding={`${spaces(48)} ${spaces(16)}`}>
							<Text as="div" color={gray[500]} margin="auto" size={fontSizes(18)} textAlign="center">
								{I18n.t(REVIEWS_EMPTY)}
							</Text>
						</Block>
					)}
				</Gap>
			</Gap>
		</Container>
	)
}

export default memo(PlaceReviewer)
