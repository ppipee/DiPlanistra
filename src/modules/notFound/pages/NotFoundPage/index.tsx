import React, { useCallback } from 'react'

import { useHistory } from 'react-router'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import Text from 'common/components/Text'
import { gray, main } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'

import { BACK_TO_PREVIOUS } from 'modules/notFound/locale'

import { PAGE_NOT_FOUND } from './locale'
import { Container } from './styled'

const NotFoundPage = () => {
	const I18n = useI18n()
	const history = useHistory()

	const back = useCallback(() => {
		history.goBack()
	}, [])

	return (
		<Container>
			<Text as="div" className="margin-bottom-20" size={fontSizes(20)} color={gray[700]}>
				{I18n.t(PAGE_NOT_FOUND)}
			</Text>
			<Button $color={main[500]} onClick={back}>
				{I18n.t(BACK_TO_PREVIOUS)}
			</Button>
		</Container>
	)
}

export default NotFoundPage
