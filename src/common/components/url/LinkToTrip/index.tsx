import React, { ReactNode } from 'react'

import { TRIP_PATH } from 'modules/trip/routes/paths'

import { LinkStyled } from './styled'

type Props = {
	tripId: string
	children: ReactNode
}

const LinkToTrip = ({ children, tripId }: Props) => {
	return <LinkStyled to={`${TRIP_PATH}/${tripId}`}>{children}</LinkStyled>
}

export default LinkToTrip
