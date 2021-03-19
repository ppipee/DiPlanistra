import React from 'react'

import Skeleton from 'common/components/Skeleton'
import Text from 'common/components/Text'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import { CardDetail, CardTitle } from './styled'

const PlaceDetailLoading = () => {
	const { detailSize, subDetailSize } = useFontSizeResponsive()

	return (
		<CardDetail $size={spaces(8)} $type="vertical" $justifyContent="space-between">
			<div>
				<CardTitle size={detailSize} margin={`0 ${spaces(4)} 0 0`}>
					<Skeleton width="90%" />
				</CardTitle>
				<Skeleton width="55%" />
			</div>
			<Text as="div" size={subDetailSize}>
				<Skeleton width="75%" count={2} />
			</Text>
		</CardDetail>
	)
}

export default PlaceDetailLoading
