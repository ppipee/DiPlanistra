import React from 'react'

import FullText from 'common/components/FullText'
import Skeleton from 'common/components/Skeleton'
import Text from 'common/components/Text'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'

import { CardContainer, CardContent, ImageCoverLoading } from './styled'

const EventCardLoading = () => {
	const { subTitleSize, subDetailSize } = useFontSizeResponsive()

	return (
		<CardContainer>
			<Skeleton wrapper={ImageCoverLoading} width="100%" height="100%" />
			<CardContent>
				<FullText size={subTitleSize}>
					<Skeleton width="85%" />
				</FullText>
				<Text className="margin-bottom-8" as="div" size={subDetailSize}>
					<Skeleton width="70%" count={2} />
				</Text>
				<FullText as="div" size={subDetailSize}>
					<Skeleton width="20%" />
				</FullText>
				<FullText as="div" size={subDetailSize}>
					<Skeleton width="50%" />
				</FullText>
			</CardContent>
		</CardContainer>
	)
}

export default EventCardLoading
