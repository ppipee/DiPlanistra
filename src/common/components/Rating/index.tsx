import React from 'react'

import { range } from 'lodash'

import { yellow } from 'common/styles/colors'

import Flex from '../Flex'
import StarIcon from '../icons/StarIcon'

const DEFAULT_ICON_SIZE = 20

type Props = {
	rating: number
	size?: number
}

const Rating = ({ rating, size = DEFAULT_ICON_SIZE }: Props) => {
	return (
		<Flex>
			{range(Math.floor(rating)).map((index) => (
				<StarIcon color={yellow[500]} size={size} key={`rating-${index}`} />
			))}
		</Flex>
	)
}

export default Rating
