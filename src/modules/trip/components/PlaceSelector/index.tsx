import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Collapse from 'common/components/animation/Collapse'
import ClickableBlock from 'common/components/ClickableBlock'
import Flex from 'common/components/Flex'
import ArrowDownIcon from 'common/components/icons/ArrowDownIcon'
import Overlay from 'common/components/Overlay'
import Position from 'common/components/Position'
import Text from 'common/components/Text'
import useSwitch from 'common/hooks/useSwitch'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import { EventPreview } from 'modules/event/types'
import useMountFavorite from 'modules/place/hooks/useMountFavorite'
import useDomainSelector from 'modules/trip/hooks/useDomainSelector'
import { ActivityPlace } from 'modules/trip/types/planner'

import PlaceList from './components/PlaceList'
import PlacePreviewCard from './components/PlacePreviewCard'
import { SELECTOR_PLACEHOLDER } from './locale'
import { ArrowContainer, PlaceSelectedContainer } from './styled'

export type PlaceSelectorProps = {
	setPlace: (placeIndex: number) => void
	placeSelectedIndex: number
}

const ICON_ARROW_SIZE = 24

const PlaceSelector = (props: PlaceSelectorProps) => {
	const I18n = useI18n()
	const { isOpen, open, close } = useSwitch()
	const { domain } = useDomainSelector()
	const { isLoading, isFresh, favorites } = useMountFavorite(domain)

	if (isLoading || (isFresh && !favorites) || !favorites) return null

	const { placeSelectedIndex } = props

	const placeSelected = placeSelectedIndex >= 0 ? (favorites[placeSelectedIndex] as ActivityPlace & EventPreview) : null

	return (
		<div>
			<ClickableBlock onClick={open}>
				<Flex $alignItems="stretch">
					<PlaceSelectedContainer $padding={spaces(10)} $isOpen={isOpen}>
						{placeSelected ? (
							<PlacePreviewCard place={placeSelected} />
						) : (
							<Text as="div" margin="auto" color={gray[300]}>
								{I18n.t(SELECTOR_PLACEHOLDER)}
							</Text>
						)}
					</PlaceSelectedContainer>
					<ArrowContainer $alignItems="center" $isOpen={isOpen}>
						<ArrowDownIcon color={gray[700]} size={ICON_ARROW_SIZE} />
					</ArrowContainer>
				</Flex>
			</ClickableBlock>
			{isOpen && (
				<Position $position="relative" $scale="full" $zIndex={ZIndexes.DropDown}>
					<Collapse duration={0.2}>
						<PlaceList close={close} places={favorites} {...props} />
					</Collapse>
				</Position>
			)}
			<Overlay isOpen={isOpen} onClick={close} transparent />
		</div>
	)
}

export default PlaceSelector
