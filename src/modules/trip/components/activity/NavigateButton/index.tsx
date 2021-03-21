import React from 'react'

import { useGeolocation } from 'react-use'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import NavigationIcon from 'common/components/icons/NavigationIcon'
import { green, main, white } from 'common/styles/colors'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import { LatLng } from 'common/types/wongnai/common'

import { DIRECTION } from './locale'

const ICON_SIZE = 16

type Props = {
	coordinate: LatLng
}

const NavigateButton = ({ coordinate }: Props) => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()
	const { latitude, longitude } = useGeolocation()

	const { lat, lng } = coordinate

	const navigateUrl = `https://www.google.co.th/maps/dir/${
		latitude && longitude ? `${latitude},${longitude}` : ''
	}/${lat},${lng}/data=!4m2!4m1!3e0`

	return (
		<a href={navigateUrl} target="_blank" rel="noreferrer">
			<Button
				$color={main[500]}
				$responsive
				$secondaryColor={green[500]}
				$border="curve"
				$size={isDesktop ? 'default' : 'small'}
			>
				<Gap $size={spaces(4)} $alignCenter>
					<NavigationIcon size={ICON_SIZE} color={white} />
					<span>{I18n.t(DIRECTION)}</span>
				</Gap>
			</Button>
		</a>
	)
}

export default NavigateButton
