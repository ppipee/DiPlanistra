import React from 'react'

import Collapse from 'common/components/animation/Collapse'
import ClickableBlock from 'common/components/ClickableBlock'
import Flex from 'common/components/Flex'
import ArrowDownIcon from 'common/components/icons/ArrowDownIcon'
import Overlay from 'common/components/Overlay'
import Position from 'common/components/Position'
import useSwitch from 'common/hooks/useSwitch'
import { gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import ZIndexes from 'common/styles/mixins/zIndexes'

import { PlacePreview } from 'modules/place/types'

import PlaceList from './components/PlaceList'
import PlacePreviewCard from './components/PlacePreviewCard'
import { ArrowContainer, PlaceSelectedContainer } from './styled'

export type PlaceSelectorProps = {
	places: PlacePreview[]
	setPlace: (placeIndex: number) => void
	placeSelectedIndex: number
}

const ICON_ARROW_SIZE = 24

const PlaceSelector = (props: PlaceSelectorProps) => {
	const { isOpen, open, close } = useSwitch()
	const placeSelected = props.places[props.placeSelectedIndex]

	return (
		<div>
			<ClickableBlock onClick={open}>
				<Flex $alignItems="stretch">
					<PlaceSelectedContainer $padding={spaces(10)} $isOpen={isOpen}>
						<PlacePreviewCard place={placeSelected} />
					</PlaceSelectedContainer>
					<ArrowContainer $alignItems="center" $isOpen={isOpen}>
						<ArrowDownIcon color={gray[700]} size={ICON_ARROW_SIZE} />
					</ArrowContainer>
				</Flex>
			</ClickableBlock>
			{isOpen && (
				<Position $position="relative" $scale="full" $zIndex={ZIndexes.DropDown}>
					<Collapse duration={0.2}>
						<PlaceList close={close} {...props} />
					</Collapse>
				</Position>
			)}
			<Overlay isOpen={isOpen} onClick={close} transparent />
		</div>
	)
}

export default PlaceSelector
