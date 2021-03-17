import React from 'react'

import { range } from 'lodash'

import PlaceCardLoading from '../PlaceCard/loading'

const PlaceCardListLoading = () => (
	<>
		{range(3).map((i) => (
			<>
				<PlaceCardLoading key={`place-card-${i}-0`} isHighlight />
				<PlaceCardLoading key={`place-card-${i}-1`} isHighlight />
				<PlaceCardLoading key={`place-card-${i}-2`} />
			</>
		))}
	</>
)

export default PlaceCardListLoading
