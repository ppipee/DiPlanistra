import React from 'react'

import { SlickBaseStyle, SlickStyle } from './styled'
import { CarouselProps } from './types'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const DEFAULT_SPEED = 500
const DEFAULT_AUTO_SPEED = 5000

const Carousel = ({ slickSheet, slickThemeSheet, children, dotColor, ...props }: CarouselProps) => {
	return (
		<>
			<SlickBaseStyle slickSheet={slickSheet} slickThemeSheet={slickThemeSheet} />
			<SlickStyle $dotColor={dotColor} {...props}>
				{children}
			</SlickStyle>
		</>
	)
}

Carousel.defaultProps = {
	speed: DEFAULT_SPEED,
	infinite: true,
	autoplaySpeed: DEFAULT_AUTO_SPEED,
	slidesToShow: 1,
	slidesToScroll: 1,
}

export default Carousel
