import React, { ReactNode } from 'react'

import { Link } from 'react-router-dom'

import { PLACE_PATH } from 'modules/place/routes/paths'

type Props = {
	placeId: string
	children: ReactNode
}

const LinkToPlace = ({ children, placeId }: Props) => {
	return <Link to={`${PLACE_PATH}/${placeId}`}>{children}</Link>
}

export default LinkToPlace
