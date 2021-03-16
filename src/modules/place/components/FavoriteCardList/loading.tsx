import React from 'react'

import { range } from 'lodash'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import PlaceCardLoading from '../PlaceCard/loading'

import { ListContainer, Container } from './styled'

const FavoriteCardListLoading = () => {
	return (
		<Container>
			<ResponsiveBlock $padding={spaces(24)} $paddingMobile={spaces(16)}>
				<ListContainer>
					{range(6).map((i) => (
						<PlaceCardLoading isHighlight key={`place-card-${i}`} />
					))}
				</ListContainer>
			</ResponsiveBlock>
		</Container>
	)
}

export default FavoriteCardListLoading
