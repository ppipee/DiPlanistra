import React, { useCallback } from 'react'

import { useHistory } from 'react-router'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Text from 'common/components/Text'
import { gray, main } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'

import { BACK_TO_PREVIOUS } from 'modules/notFound/locale'

import { ERROR_SOMETHING_WENT_WRONG } from './locale'
import { Container } from './styled'

type Props = {
	errorMessage?: string
}

const ErrorPage = ({ errorMessage }: Props) => {
	const I18n = useI18n()
	const history = useHistory()

	const back = useCallback(() => {
		history.goBack()
	}, [])

	return (
		<Container>
			<Text as="div" size={fontSizes(20)} color={gray[700]}>
				{I18n.t(ERROR_SOMETHING_WENT_WRONG)}
			</Text>
			{errorMessage && (
				<Text className="margin-bottom-20 margin-top-12" as="div" color={gray[700]} size={fontSizes(16)}>
					{errorMessage}
				</Text>
			)}
			<Button $color={main[500]} onClick={back}>
				{I18n.t(BACK_TO_PREVIOUS)}
			</Button>
		</Container>
	)
}

export default ErrorPage
