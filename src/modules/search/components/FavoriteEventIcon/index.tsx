import React from 'react'

import HeartEmptyIcon from 'common/components/icons/HeartEmptyIcon'
import HeartIcon from 'common/components/icons/HeartIcon'
import { gray, red } from 'common/styles/colors'

import useToggleFavoriteEvent from 'modules/search/hooks/useToggleFavoriteEvent'

type Props = {
	eventId: string
	isFavorite: boolean
	size?: number
	defaultColor?: string
}

const FAV_ICON_SIZE = 20

const FavoriteEventIcon = ({ eventId, isFavorite: _isFavorite, defaultColor, size = FAV_ICON_SIZE }: Props) => {
	const { toggleFavorite, isFavorite } = useToggleFavoriteEvent(eventId, _isFavorite)

	const FavIcon = isFavorite ? HeartIcon : HeartEmptyIcon

	return (
		<FavIcon
			className="margin-top-4"
			onClick={toggleFavorite}
			cursor="pointer"
			size={size}
			color={isFavorite ? defaultColor || red[500] : defaultColor || gray[200]}
		/>
	)
}

export default FavoriteEventIcon
