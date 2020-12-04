import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import { Shadow } from 'common/components/BlockShadow/types'
import Gap from 'common/components/Gap'
import ClockIcon from 'common/components/icons/ClockIcon'
import HeartEmptyIcon from 'common/components/icons/HeartEmptyIcon'
import HeartIcon from 'common/components/icons/HeartIcon'
import TagIcon from 'common/components/icons/TagIcon'
import Rating from 'common/components/Rating'
import Text from 'common/components/Text'
import { gray, green, red } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import { Business } from 'common/types/wongnai/business'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { CLOSED_STATUS, OPENED_STATUS, REVIEW_UNIT } from 'modules/place/locale'
import getCategoryTag from 'modules/place/utils/getCategoryTags'
import getWorkingHour from 'modules/place/utils/getWorkingHour'

import { CardContainer, CardImage, CardDetail, CardTitle } from './styled'

type Props = {
	place: Business
	favorite?: boolean
}

const FAV_ICON_SIZE = 20
const ICON_SIZE = 16

const RecommendCard = ({ place, favorite }: Props) => {
	const I18n = useI18n()

	const {
		name,
		statistic: { rating, numberOfReviews },
		workingHoursStatus,
		categories,
		priceRange,
	} = place
	const reviewAndPriceRange = filterArrayExistingValue([
		`${I18n.t(REVIEW_UNIT, { review: numberOfReviews })}`,
		priceRange,
	]).join(' | ')

	const shopStatus = I18n.t(workingHoursStatus?.open ? OPENED_STATUS : CLOSED_STATUS)
	const workingHour = getWorkingHour(place.hours)
	const categoryTags = getCategoryTag(categories)

	const FavIcon = favorite ? HeartIcon : HeartEmptyIcon

	return (
		<CardContainer $variant={Shadow.Hard}>
			<CardImage src={(place.mainPhoto || place.defaultPhoto).smallUrl} />
			<CardDetail>
				<Text size={fontSizes(14)}>
					<Gap $size={spaces(8)} $type="vertical">
						<div>
							<Gap $size={spaces(4)} $alignCenter>
								<CardTitle size={fontSizes(16)} ellipsis={1}>
									{name}
								</CardTitle>
								<FavIcon cursor="pointer" size={FAV_ICON_SIZE} color={favorite ? red[500] : gray[200]} />
							</Gap>
							<Gap $size={spaces(4)} $alignCenter>
								{rating && <Rating rating={rating} />}
								{(numberOfReviews || priceRange) && <span>{reviewAndPriceRange}</span>}
							</Gap>
						</div>
						<div>
							<Gap $size={spaces(8)} $alignCenter>
								{workingHour && (
									<Gap $size={spaces(4)} $alignCenter>
										<ClockIcon size={ICON_SIZE} color={gray[700]} />
										<span>{workingHour}</span>
									</Gap>
								)}
								{workingHoursStatus && (
									<Text size={fontSizes(14)} color={workingHoursStatus.open ? green[500] : red[500]}>
										{shopStatus}
									</Text>
								)}
							</Gap>
							{categoryTags && (
								<Gap $size={spaces(4)} $alignCenter>
									<TagIcon size={ICON_SIZE} color={gray[700]} />
									<Text ellipsis={1}>{categoryTags.join(', ')}</Text>
								</Gap>
							)}
						</div>
					</Gap>
				</Text>
			</CardDetail>
		</CardContainer>
	)
}

export default RecommendCard
