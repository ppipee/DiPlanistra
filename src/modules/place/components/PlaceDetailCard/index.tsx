import React from 'react'

import { isEmpty } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ClockIcon from 'common/components/icons/ClockIcon'
import TagIcon from 'common/components/icons/TagIcon'
import Rating from 'common/components/Rating'
import Text from 'common/components/Text'
import { KM } from 'common/locale'
import { gray, green, red } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import convertCurrency from 'common/utils/convertCurrency'
import convertDistanceToKM from 'common/utils/convertDistanceToKM'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { CLOSED_STATUS, ENTRY_FEE, OPENED_STATUS, REVIEW_UNIT } from 'modules/place/locale'
import { PlacePreview } from 'modules/place/types/place'
import getCategoryTag from 'modules/place/utils/getCategoryTags'
import getWorkingHour from 'modules/place/utils/getWorkingHour'
import { ActivityPlace } from 'modules/trip/types/planner'

import FavoritePlaceIcon from '../FavoritePlaceIcon'

import { CardDetail, CardTitle } from './styled'

type Props = {
	place: PlacePreview & ActivityPlace
	showDistance?: boolean
	hideEntryFee?: boolean
}

const ICON_SIZE = 16

const PlaceDetailCard = ({ place, showDistance, hideEntryFee }: Props) => {
	const I18n = useI18n()
	const { detailSize, subDetailSize } = useFontSizeResponsive()

	const {
		name,
		displayName,
		rating,
		statistic,
		workingHoursStatus,
		categories,
		attractionInformation,
		numberOfReviews: reviewNumbers,
	} = place

	const numberOfReviews = statistic?.numberOfReviews || reviewNumbers

	const entryFee = attractionInformation?.entryFee

	const currency =
		!isEmpty(entryFee) &&
		(convertCurrency(entryFee.currency) ? I18n.t(convertCurrency(entryFee.currency)) : entryFee.currency)
	const reviewAndPriceRange = filterArrayExistingValue([
		numberOfReviews ? `${I18n.t(REVIEW_UNIT, { review: numberOfReviews })}` : null,
		entryFee && !hideEntryFee ? `${I18n.t(ENTRY_FEE, { fee: entryFee.adult, currency })}` : null,
	]).join('  |  ')

	const shopStatus = I18n.t(workingHoursStatus?.open ? OPENED_STATUS : CLOSED_STATUS)
	const workingHour = !isEmpty(place.hours) && getWorkingHour(place.hours)
	const categoryTags = getCategoryTag(categories)
	const distance = place.distance ? I18n.t(KM, { distance: convertDistanceToKM(place.distance) }) : null

	return (
		<CardDetail $size={spaces(8)} $type="vertical" $justifyContent="space-between">
			<Flex $justifyContent="space-between" $responsive>
				<Flex $direction="column">
					<CardTitle size={detailSize} ellipsis={2} margin={`0 ${spaces(4)} 0 0`}>
						{displayName || name}
					</CardTitle>
					<Gap $size={spaces(4)} $alignCenter $type="grid">
						{rating && <Rating rating={rating} />}
						{(numberOfReviews || entryFee) && (
							<Text whiteSpace="pre" color={gray[700]}>
								{reviewAndPriceRange}
							</Text>
						)}
					</Gap>
				</Flex>
				<Gap $size={spaces(4)} $type="vertical">
					<FavoritePlaceIcon isFavorite={place.isFavorite} publicId={place.publicId} domain={place.domain.value} />
					{showDistance && distance && (
						<Text size={fontSizes(12)} color={gray[700]} whiteSpace="nowrap">
							{distance}
						</Text>
					)}
				</Gap>
			</Flex>
			<div>
				<Gap $size={spaces(8)} $alignCenter>
					{workingHour && (
						<Gap $size={spaces(4)} $alignCenter>
							<ClockIcon size={ICON_SIZE} color={gray[700]} />
							<span>{workingHour}</span>
						</Gap>
					)}
					{workingHoursStatus && (
						<Text size={subDetailSize} color={workingHoursStatus.open ? green[500] : red[500]}>
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
		</CardDetail>
	)
}

export default PlaceDetailCard
