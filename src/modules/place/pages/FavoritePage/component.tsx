import React from 'react'

import asRoute from 'core/router/hoc/asRoute'

import ContentContainer from 'common/components/ContentContainer'

const FavoritePlacesPageComponent = () => {
	return <ContentContainer>FavoritePlaces</ContentContainer>
}

export default asRoute(FavoritePlacesPageComponent, {
	stores: {},
})
