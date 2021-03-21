import React, { useCallback } from 'react'

import { Badge } from 'common/components/Badge'
import { BadgeVariant } from 'common/components/Badge/types'
import Flex from 'common/components/Flex'
import { green, main } from 'common/styles/colors'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'
import { useUserStore } from 'modules/user/stores/UserStore/context'

import { BadgeWrapper } from './styled'

const PlaceTags = () => {
	const place = usePlaceStore((store) => store.place)
	const categories = place?.categories || []
	const favoriteCategories = useUserStore((store) => store.user.placeCategories)

	const categoryVariant = useCallback(
		(category: number) => {
			return favoriteCategories.includes(category) ? BadgeVariant.Filled : BadgeVariant.Outlined
		},
		[favoriteCategories],
	)

	return (
		<Flex>
			{categories.map((category, index) => (
				<BadgeWrapper key={`category-place-${index}`}>
					<Badge $color={main[500]} $secondColor={green[500]} $variant={categoryVariant(category.id)}>
						{category.name}
					</Badge>
				</BadgeWrapper>
			))}
		</Flex>
	)
}

export default PlaceTags
