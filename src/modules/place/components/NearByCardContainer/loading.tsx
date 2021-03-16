import React from 'react'

import { range } from 'lodash'

import NearbyCardLoading from '../NearByCard/loading'

import { Container, CardWrapper } from './styled'

const NearByCardContainerLoading = () => {
	return (
		<Container>
			{range(14).map((i) => (
				<CardWrapper key={`near-by-card-${i}`}>
					<NearbyCardLoading />
				</CardWrapper>
			))}
		</Container>
	)
}

export default NearByCardContainerLoading
