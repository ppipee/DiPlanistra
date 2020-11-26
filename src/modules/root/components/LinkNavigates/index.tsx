import React from 'react'

import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import HeartIcon from 'common/components/icons/HeartIcon'
import HomeIcon from 'common/components/icons/HomeIcon'
import PlanIcon from 'common/components/icons/PlanIcon'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { FAVORITES_PATH } from 'modules/favorites/routes/paths'
import { HOME_PATH } from 'modules/home/routes/paths'
import { TRIP_PATH } from 'modules/trips/routes/paths'

const ICON_SIZE = 28

const LinkNavigates = () => {
	return (
		<Text as="div" size={fontSizes(16)}>
			<Gap $size={spaces(12)}>
				<Link to={HOME_PATH}>
					<Gap $size={spaces(4)} $alignCenter>
						<HomeIcon size={ICON_SIZE} color={white} />
						<span>Home</span>
					</Gap>
				</Link>
				<Link to={TRIP_PATH}>
					<Gap $size={spaces(4)} $alignCenter>
						<PlanIcon size={ICON_SIZE} color={white} />
						<span>Trip</span>
					</Gap>
				</Link>
				<Link to={FAVORITES_PATH}>
					<Gap $size={spaces(4)} $alignCenter>
						<HeartIcon size={ICON_SIZE} color={white} />
						<span>Home</span>
					</Gap>
				</Link>
			</Gap>
		</Text>
	)
}

export default LinkNavigates
