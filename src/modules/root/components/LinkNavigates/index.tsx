import React from 'react'

import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import HeartIcon from 'common/components/icons/HeartIcon'
import HomeIcon from 'common/components/icons/HomeIcon'
import PlanIcon from 'common/components/icons/PlanIcon'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { HOME_PATH } from 'modules/home/routes/paths'
import { FAVORITE_PLACES_ROUTE } from 'modules/place/routes/paths'
import { NAV_ICON_SIZE } from 'modules/root/constants'
import { PLANNER_PATH } from 'modules/trips/routes/paths'

const LinkNavigates = () => {
	const { isDesktop } = useResponsive()

	return (
		<Text as="div" size={fontSizes(16)} margin="auto 0 auto auto">
			<Gap $size={spaces(12)}>
				<Link to={HOME_PATH}>
					<Gap $size={spaces(4)} $alignCenter>
						<HomeIcon size={NAV_ICON_SIZE} color={white} />
						{isDesktop && <span>Home</span>}
					</Gap>
				</Link>
				<Link to={PLANNER_PATH}>
					<Gap $size={spaces(4)} $alignCenter>
						<PlanIcon size={NAV_ICON_SIZE} color={white} />
						{isDesktop && <span>Trip</span>}
					</Gap>
				</Link>
				<Link to={FAVORITE_PLACES_ROUTE}>
					<Gap $size={spaces(4)} $alignCenter>
						<HeartIcon size={NAV_ICON_SIZE} color={white} />
						{isDesktop && <span>Favorite</span>}
					</Gap>
				</Link>
			</Gap>
		</Text>
	)
}

export default LinkNavigates
