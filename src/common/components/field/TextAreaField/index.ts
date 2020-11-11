import styled from 'styled-components'

import FieldStyle from 'common/components/field/FieldStyle'

import { TextAreaFieldProps } from './types'

const FIELD_HEIGHT = '120px'

const TextAreaField = styled(FieldStyle).attrs({ as: 'textarea' })<TextAreaFieldProps>`
	height: ${FIELD_HEIGHT};
`

export default TextAreaField
