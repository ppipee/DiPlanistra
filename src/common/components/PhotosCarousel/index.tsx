import React, { useCallback, useState } from 'react'

import { white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import { Business } from 'common/types/wongnai/business'

import Carousel from '../Carousel'
import { SlickProps } from '../Carousel/types'
import Text from '../Text'

import { CarouselContainer, PhotoWrapper, PhotoTitleWrapper } from './styled'

interface Props extends SlickProps {
	places?: Business[]
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
						<PhotoWrapper src={place.mainPhoto.largeUrl} />
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
