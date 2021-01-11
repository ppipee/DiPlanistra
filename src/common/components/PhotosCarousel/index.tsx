import React, { useCallback, useState } from 'react'

import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import LinkToPlace from 'common/utils/url/LinkToPlace'

import { PlacePreview } from 'modules/place/types/place'

import Carousel from '../Carousel'
import { SlickProps } from '../Carousel/types'
import Text from '../Text'

import { CarouselContainer, PhotoWrapper, PhotoTitleWrapper } from './styled'

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

	return (
		<CarouselContainer>
			<Carousel afterChange={afterChange} {...props} autoplay arrows={isDesktop} dots={isDesktop}>
				{places.map((place, index) => (
					<div key={index}>
						<LinkToPlace placeId={place.publicId}>
							<PhotoWrapper src={place.defaultPhoto.largeUrl} />
						</LinkToPlace>
					</div>
				))}
			</Carousel>
			<PhotoTitleWrapper>
				<Text ellipsis={1} color={white} size={fontSizes(20)}>
					{title}
				</Text>
			</PhotoTitleWrapper>
		</CarouselContainer>
	)
}

export default PhotosCarousel
