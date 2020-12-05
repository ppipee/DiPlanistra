import React, { memo } from 'react'

import { Business } from 'common/types/wongnai/business'
import LinkToPlace from 'common/utils/url/LinkToPlace'

import NearByCard from '../NearByCard'

import { Container, CardWrapper } from './styled'

type Props = {
	places: Business[]
}

const NearByCardContainer = ({ places }: Props) => {
	return (
		<Container>
			{places.map((place) => (
				<CardWrapper key={place.id}>
					<LinkToPlace placeId={place.publicId}>
						<NearByCard place={place} />
					</LinkToPlace>
				</CardWrapper>
			))}
		</Container>
	)
}

export default memo(NearByCardContainer)
