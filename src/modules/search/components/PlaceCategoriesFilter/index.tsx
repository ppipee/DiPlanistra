import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import ArrowDownIcon from 'common/components/icons/ArrowDownIcon'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import { Spaces } from 'common/styles/mixins/spaces'

import { Category } from 'modules/place/types/place'
import useCategories from 'modules/search/hooks/useCategories'
import { useCategoryModalStore } from 'modules/search/stores/CategoryModalStore/context'

import PlaceCategoryFilter from '../PlaceCategoryFilter'

import { LOCALE_PLACE_CATEGORY } from './locale'

const PlaceCategoriesFilter = () => {
	const I18n = useI18n()

	const { categories, isCategoriesLoading } = useCategories()
	const open = useCategoryModalStore((store) => store.open)

	if (!categories || isCategoriesLoading) return null

	return (
		<Gap $type="vertical" $size={Spaces[8]}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_PLACE_CATEGORY)}</Text>
			<PlaceCategoryFilter category={{ categories } as Category} hideAllValue />
			<Flex $justifyContent="center">
				<Button $color={gray[700]} $shadow={false} $variant="text" $border="curve" $size="small" onClick={open}>
					<Gap $size={Spaces[4]} $alignCenter>
						<ArrowDownIcon size={15} />
						<Text size={fontSizes(14)}>เพิ่มเติม</Text>
					</Gap>
				</Button>
			</Flex>
		</Gap>
	)
}

export default PlaceCategoriesFilter
