import React, { memo } from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import CommentIcon from 'common/components/icons/CommentIcon'
import HeartEmptyIcon from 'common/components/icons/HeartEmptyIcon'
import Rating from 'common/components/Rating'
import SeparatorLine from 'common/components/SeparatorLine'
import Text from 'common/components/Text'
import { black, gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import { Review } from 'common/types/wongnai/review'

import AccountPhoto from 'modules/profile/components/AccountPhoto'

import { ACTIVITY_RECOMMEND, SPENDING_TIME } from './locale'
import { Card, PreviewPhoto } from './styled'

type Props = {
	review: Review
}

const ICON_SIZE = 20

const ReviewCard = ({ review }: Props) => {
	const I18n = useI18n()

	const previewPhotos = review.previewPhotos?.slice(0, 3) || []

	return (
		<Card $variant="hard">
			<Gap $type="vertical" $size={spaces(24)}>
				<Gap $type="vertical" $size={spaces(8)}>
					<Gap $type="vertical" $size={spaces(4)}>
						<Text size={fontSizes(18)}>{`“${review.summary}”`}</Text>
						<Rating rating={review.rating} />
					</Gap>
					<Text size={fontSizes(14)} color={gray[700]}>
						{review.description}
					</Text>
				</Gap>
				<Gap $type="vertical" $size={spaces(10)}>
					{(!isEmpty(review.activities) || !!review.spendingHour) && (
						<Gap $type="vertical" $size={spaces(4)}>
							{!isEmpty(review.activities) && (
								<Text size={fontSizes(14)}>
									<span>{`${I18n.t(ACTIVITY_RECOMMEND)} : `}</span>
									<Text color={gray[700]}>{review.activities.join(', ')}</Text>
								</Text>
							)}
							{review.spendingHour && (
								<Text size={fontSizes(14)}>
									<span>{`${I18n.t(SPENDING_TIME)} : `}</span>
									<Text color={gray[700]}>{review.spendingHour.value}</Text>
								</Text>
							)}
						</Gap>
					)}
					{!isEmpty(previewPhotos) && (
						<Gap $size={spaces(10)}>
							{previewPhotos.map((photo) => (
								<PreviewPhoto src={photo.thumbnailUrl} key={photo.photoId} />
							))}
						</Gap>
					)}
				</Gap>
			</Gap>
			<SeparatorLine spacing={`${spaces(12)} 0 ${spaces(10)}`} />
			<Flex $justifyContent="space-between" $alignItems="flex-end">
				<Gap $size={spaces(8)} $alignCenter>
					<AccountPhoto imageUrl={review.reviewerProfile?.profilePicture.thumbnailUrl} />
					<Gap $size={spaces(2)} $type="vertical">
						<Text size={fontSizes(14)}>{review.reviewerProfile.name}</Text>
						<Text size={fontSizes(12)} color={gray[500]}>
							{review.reviewedTime.timePassed}
						</Text>
					</Gap>
				</Gap>
				<Text size={fontSizes(12)}>
					<Gap $size={spaces(8)}>
						<Gap $size={spaces(4)} $alignCenter>
							<HeartEmptyIcon color={black} size={ICON_SIZE} />
							<span>{review.numberOfHelpfulVotes}</span>
						</Gap>
						<Gap $size={spaces(4)} $alignCenter>
							<CommentIcon color={black} size={ICON_SIZE} />
							<span>{review.numberOfComments}</span>
						</Gap>
					</Gap>
				</Text>
			</Flex>
		</Card>
	)
}

export default memo(ReviewCard)
