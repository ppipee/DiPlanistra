import React, { useCallback, useState } from 'react'

import LinkToPlace from 'common/components/url/LinkToPlace'
import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'

import { PlacePreview } from 'modules/place/types/place'

import Carousel from '../Carousel'
import { SlickProps } from '../Carousel/types'
import ContentContainer from '../ContentContainer'
import Text from '../Text'

import { CarouselContainer, PhotoWrapper, Foreground, BackgroundCover, PhotoTitle, PhotoTitleWrapper } from './styled'

interface Props extends SlickProps {
	places?: PlacePreview[]
	defaultIndex?: number
}

const PhotosCarousel = ({ places, defaultIndex = 0, ...props }: Props) => {
	const [slideNumber, setSlideNumber] = useState(defaultIndex)
	const { isDesktop } = useResponsive()

	const afterChange = useCallback((currentSlide: number) => {
		setSlideNumber(currentSlide)
	}, [])

	const title = places[slideNumber]?.displayName

	const getImgSrc = useCallback(
		(place: PlacePreview) => {
			return isDesktop ? place.defaultPhoto.largeUrl : place.defaultPhoto.smallUrl || place.defaultPhoto.largeUrl
		},
		[isDesktop],
	)

	return (
		<CarouselContainer>
			<Carousel afterChange={afterChange} {...props} autoplay arrows={false} dots={isDesktop}>
				{places.map((place, index) => (
					<div key={index}>
						<LinkToPlace placeId={place.publicId}>
							<BackgroundCover $imgSrc={getImgSrc(place)}>
								<Foreground>
									<ContentContainer>
										<PhotoWrapper src={getImgSrc(place)} />
									</ContentContainer>
								</Foreground>
							</BackgroundCover>
						</LinkToPlace>
					</div>
				))}
			</Carousel>
			<PhotoTitleWrapper>
				<PhotoTitle>
					<Text ellipsis={1} color={white} size={fontSizes(20)}>
						{title}
					</Text>
				</PhotoTitle>
			</PhotoTitleWrapper>
		</CarouselContainer>
	)
}

export default PhotosCarousel
