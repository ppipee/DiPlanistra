import React from 'react'

import { Shadow } from 'common/components/BlockShadow/types'
import Skeleton from 'common/components/Skeleton'

import PlaceDetailLoading from 'modules/place/components/PlaceDetailCard/loading'

import { CardContainer, CardDetailWrapper, ImageLoading } from './styled'

const RecommendCardLoading = () => {
	return (
		<div>
			<CardContainer $variant={Shadow.Hard}>
				<ImageLoading>
					<Skeleton width="100%" height="100%" />
				</ImageLoading>
				<CardDetailWrapper>
					<PlaceDetailLoading />
				</CardDetailWrapper>
			</CardContainer>
		</div>
	)
}

export default RecommendCardLoading
