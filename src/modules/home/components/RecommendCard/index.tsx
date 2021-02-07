import React from 'react'

import { Shadow } from 'common/components/BlockShadow/types'

import PlaceDetailCard from 'modules/place/components/PlaceDetailCard'
import { PlacePreview } from 'modules/place/types/place'
import { ActivityPlace } from 'modules/trips/types/planner'

import { CardContainer, CardImage, CardDetailWrapper } from './styled'

type Props = {
	place: PlacePreview
}

const RecommendCard = ({ place }: Props) => (
	<CardContainer $variant={Shadow.Hard}>
		<CardImage src={place.defaultPhoto.smallUrl} />
		<CardDetailWrapper>
			<PlaceDetailCard place={place as ActivityPlace & PlacePreview} />
		</CardDetailWrapper>
	</CardContainer>
)

export default RecommendCard
