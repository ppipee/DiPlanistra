import React from 'react'

import { Business } from 'common/types/wongnai'

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
					<NearByCard place={place} />
				</CardWrapper>
			))}
		</Container>
	)
}

export default NearByCardContainer
