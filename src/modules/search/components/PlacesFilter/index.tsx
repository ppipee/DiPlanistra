import React from 'react'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import DistanceFilter from '../DistanceFilter'
import PlaceCategoriesFilter from '../PlaceCategoriesFilter'
import RatingFilter from '../RatingFilter'

const PlacesFilter = () => {
	return (
		<ResponsiveBlock $padding={spaces(12)}>
			<Gap $type="vertical" $size={spaces(12)}>
				<DistanceFilter />
				<RatingFilter />
				<PlaceCategoriesFilter />
			</Gap>
		</ResponsiveBlock>
	)
}

export default PlacesFilter
