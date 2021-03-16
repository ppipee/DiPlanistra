import React from 'react'

import Gap from 'common/components/Gap'
import Skeleton from 'common/components/Skeleton'
import useResponsive from 'common/styles/hooks/useResponsive'
import Borders from 'common/styles/mixins/borders'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { DESKTOP_SIZE, MOBILE_SIZE, PlaceContainer, PlaceName } from './styled'

const NearbyCardLoading = () => {
	const { isDesktop } = useResponsive()
	const imageSize = isDesktop ? DESKTOP_SIZE : MOBILE_SIZE

	return (
		<PlaceContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(4) : spaces(8)} $alignCenter $responsive>
				<Skeleton width={imageSize} height={imageSize} $radius={Borders.Large} />
				<PlaceName size={isDesktop ? fontSizes(16) : fontSizes(14)} textAlign="center">
					<Skeleton width="80%" />
				</PlaceName>
			</Gap>
		</PlaceContainer>
	)
}

export default NearbyCardLoading
