import React, { useCallback } from 'react'

import { Badge } from 'common/components/Badge'
import { BadgeVariant } from 'common/components/Badge/types'
import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'
import getCategoryTag from 'modules/place/utils/getCategoryTags'

import { BadgeWrapper } from './styled'

const PlaceTags = () => {
	const place = usePlaceStore((store) => store.place)
	const categories = place?.categories || []
	const favoriteTags = { ห้างสรรพสินค้า: true }
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
					<Badge $color={main[500]} $secondColor={green[500]} $variant={categoryVariant(category)}>
						{category}
					</Badge>
				</BadgeWrapper>
			))}
		</Flex>
	)
}

export default PlaceTags
