import React from 'react'

import { isNumber } from 'lodash'

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

import useMountFavoritePlaces from 'modules/place/hooks/useMountFavoritePlaces'

import PlaceList from './components/PlaceList'
import PlacePreviewCard from './components/PlacePreviewCard'
import { ArrowContainer, PlaceSelectedContainer } from './styled'

export type PlaceSelectorProps = {
	setPlace: (placeIndex: number) => void
	placeSelectedIndex: number
}

const ICON_ARROW_SIZE = 24

const PlaceSelector = (props: PlaceSelectorProps) => {
	const { isOpen, open, close } = useSwitch()
	const { isLoading, isFresh, favoritePlaces } = useMountFavoritePlaces()

	if (isLoading || isFresh) return null

	const { placeSelectedIndex } = props

	const placeSelected =
		isNumber(placeSelectedIndex) && placeSelectedIndex >= 0 ? favoritePlaces[props.placeSelectedIndex] : null

	return (
		<div>
			<ClickableBlock onClick={open}>
				<Flex $alignItems="stretch">
					<PlaceSelectedContainer $padding={spaces(10)} $isOpen={isOpen}>
						{placeSelected ? (
							<PlacePreviewCard place={placeSelected} />
						) : (
							<Text as="div" margin="auto" color={gray[300]}>
								{'Select Place'}
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
						<PlaceList close={close} places={favoritePlaces} {...props} />
					</Collapse>
				</Position>
			)}
			<Overlay isOpen={isOpen} onClick={close} transparent />
		</div>
	)
}

export default PlaceSelector
