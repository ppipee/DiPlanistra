import React from 'react'

import HeartEmptyIcon from 'common/components/icons/HeartEmptyIcon'
import HeartIcon from 'common/components/icons/HeartIcon'
import { gray, red } from 'common/styles/colors'

import useToggleFavoritePlace from 'modules/place/hooks/useToggleFavoritePlace'

type Props = {
	publicId: string
	isFavorite: boolean
}

const FAV_ICON_SIZE = 20

const FavoritePlaceIcon = ({ publicId, isFavorite }: Props) => {
	const { toggleFavorite, isFavoritePlace } = useToggleFavoritePlace(publicId, isFavorite)

	const FavIcon = isFavoritePlace ? HeartIcon : HeartEmptyIcon

	return (
		<div onClick={toggleFavorite}>
			<FavIcon cursor="pointer" size={FAV_ICON_SIZE} color={isFavoritePlace ? red[500] : gray[200]} />
		</div>
	)
}

export default FavoritePlaceIcon
