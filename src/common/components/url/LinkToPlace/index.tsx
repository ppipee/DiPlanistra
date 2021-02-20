import React, { ReactNode } from 'react'

import { PLACE_PATH } from 'modules/place/routes/paths'

import { LinkStyled } from './styled'

type Props = {
	placeId: string
	children: ReactNode
}

const LinkToPlace = ({ children, placeId }: Props) => {
	return <LinkStyled to={`${PLACE_PATH}/${placeId}`}>{children}</LinkStyled>
}

export default LinkToPlace
