import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { KM } from 'common/locale/index'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'
import { Business } from 'common/types/wongnai/business'
import convertDistanceToKM from 'common/utils/convertDistanceToKM'

import { DistanceWrapper, PlaceContainer, PlaceImage, PlaceName } from './styled'

type Props = {
	place: Business
}

const NearByCard = ({ place }: Props) => {
	const { isDesktop } = useResponsive()
	const I18n = useI18n()

	return (
		<PlaceContainer>
			<Gap $type="vertical" $size={isDesktop ? spaces(4) : spaces(8)} $alignCenter $responsive>
				<div>
					<PlaceImage src={place.defaultPhoto.smallUrl} />
					{place.distance && (
						<DistanceWrapper $alignItems="center" $padding={`${spaces(8)}`}>
							<Text color={white} size={isDesktop ? fontSizes(12) : fontSizes(10)}>
								{I18n.t(KM, { distance: convertDistanceToKM(place.distance) })}
							</Text>
						</DistanceWrapper>
					)}
				</div>
				<PlaceName size={isDesktop ? fontSizes(16) : fontSizes(14)} ellipsis={1} textAlign="center">
					{place.displayName}
				</PlaceName>
			</Gap>
		</PlaceContainer>
	)
}

export default NearByCard
