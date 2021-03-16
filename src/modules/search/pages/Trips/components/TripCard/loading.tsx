import React from 'react'

import Gap from 'common/components/Gap'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Skeleton from 'common/components/Skeleton'
import Text from 'common/components/Text'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import { CardContent, CardHeader, FullText } from './styled'

const TripCardLoading = () => {
	const { titleSize, detailSize, subDetailSize } = useFontSizeResponsive()

	return (
		<ResponsiveBlock>
			<CardHeader>
				<FullText size={titleSize}>
					<Skeleton width="75%" />
				</FullText>
			</CardHeader>
			<CardContent>
				<FullText as="div" size={subDetailSize}>
					<Skeleton width="50%" />
				</FullText>
				<Text as="div" size={detailSize}>
					<Skeleton width="80%" count={3} />
				</Text>
				<Text as="div" size={subDetailSize}>
					<Gap $justifyContent="space-between" $size={spaces(8)}>
						<Skeleton width="25%" />
						<Skeleton width="45%" />
					</Gap>
				</Text>
			</CardContent>
		</ResponsiveBlock>
	)
}

export default TripCardLoading
