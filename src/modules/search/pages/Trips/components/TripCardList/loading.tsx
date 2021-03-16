import React from 'react'

import { range } from 'lodash'

import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import TripCardLoading from '../TripCard/loading'

const TripCardListLoading = () => {
	return (
		<Gap $type="vertical" $size={spaces(12)}>
			{range(6).map((i) => (
				<TripCardLoading key={`trip-card-${i}`} />
			))}
		</Gap>
	)
}

export default TripCardListLoading
