import React from 'react'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import IconBlock from 'common/components/IconBlock'
import TagIcon from 'common/components/icons/TagIcon'
import Rating from 'common/components/Rating'
import Text from 'common/components/Text'
import { black, gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import lineHeights from 'common/styles/mixins/lineHeights'
import spaces from 'common/styles/mixins/spaces'

import { EventPreview } from 'modules/event/types'
import getCategoryTag from 'modules/place/utils/getCategoryTags'
import { ActivityPlace } from 'modules/trip/types/planner'

import { PlaceImage } from './styled'

const ICON_SIZE = 16
const BLOCK_ICON_SIZE = '18px'

type Props = {
	place: ActivityPlace & EventPreview
}
const PlacePreviewCard = ({ place }: Props) => {
	const { defaultPhoto, rating, categories, name, thumbnailUrl, introduction } = place

	const categoryTags = getCategoryTag(categories)
	const imagePreview = defaultPhoto?.smallUrl || thumbnailUrl

	return (
		<Gap $size={spaces(8)}>
			{imagePreview && <PlaceImage src={imagePreview} loading="lazy" />}
			<Flex $direction="column" $justifyContent="space-between">
				<div>
					<div>
						<Text
							size={fontSizes(14)}
							lineHeight={lineHeights(18)}
							weight="bold"
							color={black}
							ellipsis={2}
							whiteSpace="initial"
						>
							{name}
						</Text>
						{rating && <Rating rating={rating} />}
					</div>
					{introduction && (
						<Text className="margin-top-4" size={fontSizes(12)} color={black} ellipsis={2} whiteSpace="initial">
							{introduction}
						</Text>
					)}
				</div>

				{categoryTags && (
					<Gap $size={spaces(4)}>
						<IconBlock icon={TagIcon} blockSize={BLOCK_ICON_SIZE} size={ICON_SIZE} color={gray[700]} />
						<Text color={gray[700]} size={fontSizes(12)} ellipsis={1} whiteSpace="initial">
							{categoryTags.join(', ')}
						</Text>
					</Gap>
				)}
			</Flex>
		</Gap>
	)
}

export default PlacePreviewCard
