import React from 'react'

import { isNil } from 'lodash'

import useI18n from 'core/locale/hooks/useI18n'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray, green, red } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import { CLOSED_STATUS, OPENED_STATUS } from 'modules/place/locale'
import { Place } from 'modules/place/types/place'

import FavoritePlaceIcon from '../FavoritePlaceIcon'
import PlaceTags from '../PlaceTags'

import { Container, CoverPhoto, ContainerWrapper, BlurBackground, Foreground } from './styled'

type Props = {
	place: Place
}

const PlaceHeader = ({ place }: Props) => {
	const I18n = useI18n()
	const { highlightSize, detailSize, titleSize } = useFontSizeResponsive()

	const workingHourStatus = place.workingHoursStatus?.open
	const shopStatus = I18n.t(workingHourStatus ? OPENED_STATUS : CLOSED_STATUS)
	const shopMessage = place.workingHoursStatus?.message
	const coverPhoto = place.coverPhoto?.largeUrl || place.defaultPhoto?.largeUrl

	return (
		<div>
			{coverPhoto && (
				<BlurBackground $imgSrc={coverPhoto}>
					<Foreground>
						<ContentContainer>
							<CoverPhoto src={coverPhoto} loading="lazy" />
						</ContentContainer>
					</Foreground>
				</BlurBackground>
			)}
			<ContainerWrapper>
				<Container>
					<Gap $size={spaces(8)}>
						<Gap $size={spaces(8)} $type="vertical" $responsive>
							<div>
								<Text size={highlightSize} ellipsis={2}>
									{place.displayName}
								</Text>
								<Gap $size={spaces(4)} $alignCenter>
									{!isNil(workingHourStatus) && (
										<Text color={workingHourStatus ? green[500] : red[500]} size={titleSize}>
											{shopStatus}
										</Text>
									)}
									{shopMessage && (
										<Text color={gray[500]} size={detailSize}>
											{shopMessage}
										</Text>
									)}
								</Gap>
							</div>
							<PlaceTags />
						</Gap>
						<FavoritePlaceIcon
							isFavorite={place.isFavorite}
							publicId={place.publicId}
							size={28}
							domain={place.domain.value}
						/>
					</Gap>
				</Container>
			</ContainerWrapper>
		</div>
	)
}

export default PlaceHeader
