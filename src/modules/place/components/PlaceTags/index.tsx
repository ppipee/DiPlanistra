import React, { useCallback } from 'react'

import { Badge } from 'common/components/Badge'
import { BadgeVariant } from 'common/components/Badge/types'
import Flex from 'common/components/Flex'
import { PLACE_HIGHLIGHT } from 'common/mocks/placeHighlight'
import { green } from 'common/styles/colors'

import getCategoryTag from 'modules/place/utils/getCategoryTags'

import { BadgeWrapper } from './styled'

const PlaceTags = () => {
	const categories = PLACE_HIGHLIGHT.categories
	const favoriteTags = {}
	const categoryTags = getCategoryTag(categories)

	const categoryVariant = useCallback(
		(category: string) => {
			return favoriteTags[category] ? BadgeVariant.Filled : BadgeVariant.Outlined
		},
		[favoriteTags],
	)

	return (
		<Flex>
			{categoryTags.map((category, index) => (
				<BadgeWrapper key={`category-place-${index}`}>
					<Badge $color={green[700]} $secondColor={green[500]} $variant={categoryVariant(category)}>
						{category}
					</Badge>
				</BadgeWrapper>
			))}
		</Flex>
	)
}

export default PlaceTags
