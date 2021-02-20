import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import IconBlock from 'common/components/IconBlock'
import TagIcon from 'common/components/icons/TagIcon'
import Rating from 'common/components/Rating'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import convertCurrency from 'common/utils/convertCurrency'

import { ENTRY_FEE } from 'modules/place/locale'
import getCategoryTag from 'modules/place/utils/getCategoryTags'
import { ActivityPlace } from 'modules/trip/types/planner'

import { PlaceImage } from './styled'

type Props = {
	place: ActivityPlace
}

const ICON_SIZE = 16
const BLOCK_ICON_SIZE = '25px'

const ActivityPlace = ({ place }: Props) => {
	const I18n = useI18n()

	const { categories, defaultPhoto, rating, entryFee } = place

	const categoryTags = getCategoryTag(categories)
	const currency = convertCurrency(entryFee.currency) ? I18n.t(convertCurrency(entryFee.currency)) : entryFee.currency

	return (
		<Gap $size={spaces(10)} $responsive>
			<PlaceImage src={defaultPhoto.smallUrl} />
			<Flex $direction="column" $justifyContent="space-between" $responsive>
				<Gap $size={spaces(4)} $alignCenter $wrap="wrap">
					{rating && <Rating rating={rating} />}
					{entryFee && <Text color={gray[700]}>{I18n.t(ENTRY_FEE, { fee: entryFee.adult, currency })}</Text>}
				</Gap>
				{categoryTags && (
					<Gap $size={spaces(4)}>
						<IconBlock icon={TagIcon} blockSize={BLOCK_ICON_SIZE} size={ICON_SIZE} color={gray[700]} />
						<Text color={gray[700]}>{categoryTags.join(', ')}</Text>
					</Gap>
				)}
			</Flex>
		</Gap>
	)
}

export default ActivityPlace
