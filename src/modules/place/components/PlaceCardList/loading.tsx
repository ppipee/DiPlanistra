import React from 'react'

import { range } from 'lodash'

import PlaceCardLoading from '../PlaceCard/loading'

const PlaceCardListLoading = () => (
	<>
		{range(3).map((i) => (
			<>
				<PlaceCardLoading key={`place-card-loading-${3 * i + 1}`} isHighlight />
				<PlaceCardLoading key={`place-card-loading-${3 * i + 2}`} isHighlight />
				<PlaceCardLoading key={`place-card-loading-${3 * i + 3}`} />
			</>
		))}
	</>
)

export default PlaceCardListLoading
