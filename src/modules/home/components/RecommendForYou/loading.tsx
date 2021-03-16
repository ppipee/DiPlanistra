import React from 'react'

import { range } from 'lodash'

import RecommendCardLoading from '../RecommendCard/loading'

const RecommendForYouLoading = () => (
	<>
		{range(6).map((i) => (
			<RecommendCardLoading key={`recommend-card-${i}`} />
		))}
	</>
)

export default RecommendForYouLoading
