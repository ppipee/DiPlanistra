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
				<LinkToPlace key={place.id} placeId={place.publicId}>
					<CardWrapper>
						<NearByCard place={place} />
					</CardWrapper>
				</LinkToPlace>
			))}
		</Container>
	)
}

export default memo(NearByCardContainer)
