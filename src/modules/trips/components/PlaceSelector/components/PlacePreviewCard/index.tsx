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

import getCategoryTag from 'modules/place/utils/getCategoryTags'
import { ActivityPlace } from 'modules/trips/types/planner'

import { PlaceImage } from './styled'

const ICON_SIZE = 16
const BLOCK_ICON_SIZE = '18px'

type Props = {
	place: ActivityPlace
}
const PlacePreviewCard = ({ place }: Props) => {
	const { defaultPhoto, rating, categories, name } = place

	const categoryTags = getCategoryTag(categories)

	return (
		<Gap $size={spaces(8)}>
			<PlaceImage src={defaultPhoto.smallUrl} />
			<Flex $direction="column" $justifyContent="space-between">
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
					<Rating rating={rating} />
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