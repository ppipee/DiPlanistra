import React from 'react'
import { useCallback } from 'react'

import { useGeolocation } from 'react-use'

import useI18n from 'core/locale/hooks/useI18n'

import InputField from 'common/components/field/InputField'
import MyLocationIcon from 'common/components/icons/MyLocationIcon'
import Text from 'common/components/Text'
import usePassQuery from 'common/hooks/usePassQuery'
import { red, white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'

import { LOCATION_SUFFIX_TEXT } from 'modules/search/locale'

import { InputWrapper } from './styled'

const LocationInput = () => {
	const I18n = useI18n()
	const { latitude, longitude } = useGeolocation()
	const passQuery = usePassQuery()

	const setCurrentLocation = useCallback(() => {
		passQuery({ params: { lat: latitude, lng: longitude } })
	}, [latitude, longitude])

	return (
		<InputWrapper>
			<InputField
				$prefix={
					<Text size={fontSizes(14)} color={white}>
						{I18n.t(LOCATION_SUFFIX_TEXT)}
					</Text>
				}
				$suffixIcon={MyLocationIcon}
				$onSuffixClick={setCurrentLocation}
				$iconColor={red[500]}
			/>
		</InputWrapper>
	)
}

export default LocationInput
