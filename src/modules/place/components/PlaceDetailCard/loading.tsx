import React from 'react'

import Gap from 'common/components/Gap'
import Skeleton from 'common/components/Skeleton'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { CardDetail, CardTitle } from './styled'

const PlaceDetailLoading = () => {
	return (
		<CardDetail>
			<Gap $size={spaces(8)} $type="vertical" $justifyContent="space-between">
				<div>
					<CardTitle size={fontSizes(16)} margin={`0 ${spaces(4)} 0 0`}>
						<Skeleton width="90%" />
					</CardTitle>
					<Skeleton width="55%" />
				</div>
				<Text as="div" size={fontSizes(14)}>
					<Skeleton width="75%" count={2} />
				</Text>
			</Gap>
		</CardDetail>
	)
}

export default PlaceDetailLoading
