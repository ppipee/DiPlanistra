import React from 'react'

import { Link } from 'react-router-dom'

import Gap from 'common/components/Gap'
import IconButton from 'common/components/IconButton'
import HeartIcon from 'common/components/icons/HeartIcon'
import HomeIcon from 'common/components/icons/HomeIcon'
import PlanIcon from 'common/components/icons/PlanIcon'
import SearchIcon from 'common/components/icons/SearchIcon'
import Text from 'common/components/Text'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import { Spaces } from 'common/styles/mixins/spaces'

import { HOME_PATH } from 'modules/home/routes/paths'
import { FAVORITE_PLACES_ROUTE } from 'modules/place/routes/paths'
import { NAV_ICON_SIZE, NAV_MOBILE_ICON_SIZE } from 'modules/root/constants'
import { useMobileSearchInputStore } from 'modules/search/stores/MobileSearchInputStore/context'
import { PLANNER_PATH } from 'modules/trip/routes/paths'

const LinkNavigates = () => {
	const { isDesktop } = useResponsive()
	const openMobileSearch = useMobileSearchInputStore((store) => store.open)

	return (
		<Text as="div" size={fontSizes(16)} margin="auto 0 auto auto">
			<Gap $size={isDesktop ? Spaces[12] : Spaces[8]} $alignCenter>
				{!isDesktop && (
					<IconButton $size={NAV_ICON_SIZE} onClick={openMobileSearch}>
						<SearchIcon size={NAV_MOBILE_ICON_SIZE} />
					</IconButton>
				)}
				{isDesktop && (
					<Link to={HOME_PATH}>
						<Gap $size={Spaces[4]} $alignCenter>
							<HomeIcon size={NAV_ICON_SIZE} />
							<span>Home</span>
						</Gap>
					</Link>
				)}
				<Link to={PLANNER_PATH}>
					<Gap $size={Spaces[4]} $alignCenter>
						{isDesktop ? (
							<>
								<PlanIcon size={NAV_ICON_SIZE} />
								<span>Trip</span>
							</>
						) : (
							<IconButton $size={NAV_ICON_SIZE}>
								<PlanIcon size={NAV_MOBILE_ICON_SIZE} />
							</IconButton>
						)}
					</Gap>
				</Link>
				{isDesktop && (
					<Link to={FAVORITE_PLACES_ROUTE}>
						<Gap $size={Spaces[4]} $alignCenter>
							<HeartIcon size={NAV_ICON_SIZE} />
							<span>Favorite</span>
						</Gap>
					</Link>
				)}
			</Gap>
		</Text>
	)
}

export default LinkNavigates
