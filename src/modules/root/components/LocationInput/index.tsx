import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import InputField from 'common/components/field/InputField'
import MyLocationIcon from 'common/components/icons/MyLocationIcon'
import Text from 'common/components/Text'
import { red, white } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'

import { LocationSuffixText } from './locale'
import { InputWrapper } from './styled'

const LocationInput = () => {
	const I18n = useI18n()

	return (
		<InputWrapper>
			<InputField
				$suffix={
					<Text size={fontSizes(14)} color={white}>
						{I18n.t(LocationSuffixText)}
					</Text>
				}
				$prefixIcon={MyLocationIcon}
				$iconColor={red[500]}
				$prefixClickable
			/>
		</InputWrapper>
	)
}

export default LocationInput
