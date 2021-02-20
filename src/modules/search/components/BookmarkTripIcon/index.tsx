import React from 'react'

import BookmarkFilledIcon from 'common/components/icons/BookmarkFilledIcon'
import BookmarkIcon from 'common/components/icons/BookmarkIcon'
import { white } from 'common/styles/colors'

import useToggleBookmark from 'modules/search/hooks/useToggleBookmark'

type Props = {
	plannerId: string
	isBookmark: boolean
	size?: number
}

const BOOKMARK_ICON_SIZE = 24

const BookmarkTripIcon = ({ plannerId, isBookmark: _isBookmark, size = BOOKMARK_ICON_SIZE }: Props) => {
	const { toggleFavorite, isBookmark } = useToggleBookmark(plannerId, _isBookmark)

	const FavIcon = isBookmark ? BookmarkFilledIcon : BookmarkIcon

	return (
		<div onClick={toggleFavorite}>
			<FavIcon cursor="pointer" size={size} color={white} />
		</div>
	)
}

export default BookmarkTripIcon
