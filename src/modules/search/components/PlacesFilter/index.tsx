import React from 'react'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import DistanceFilter from '../DistanceFilter'
import PlaceCategoryFilter from '../PlaceCategoryFilter'
import PlaceDomainSelector from '../PlaceDomainSelector'
import RatingFilter from '../RatingFilter'

const PlacesFilter = () => {
	return (
		<Gap $type="vertical" $size={spaces(12)}>
			<ResponsiveBlock $padding={spaces(12)}>
				<PlaceDomainSelector />
			</ResponsiveBlock>
			<ResponsiveBlock $padding={spaces(12)}>
				<Gap $type="vertical" $size={spaces(12)}>
					<DistanceFilter />
					<RatingFilter />
					<PlaceCategoryFilter />
				</Gap>
			</ResponsiveBlock>
		</Gap>
	)
}

export default PlacesFilter
