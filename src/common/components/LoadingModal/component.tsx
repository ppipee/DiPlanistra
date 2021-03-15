import React from 'react'

import { LoaderProps } from 'react-loader-spinner'

import { green, main } from 'common/styles/colors'
import ZIndexes from 'common/styles/mixins/zIndexes'

import Overlay from '../Overlay'

import { Loader } from './styled'

type Props = {
	type?: LoaderProps['type']
}

const LoadingModalComponent = ({ type = 'MutatingDots' }: Props) => {
	return (
		<>
			<Loader type={type} color={main[500]} secondaryColor={green[500]} height={150} width={150} />
			<Overlay isOpen zIndex={ZIndexes.HighPriorityModalOverlay} />
		</>
	)
}

export default LoadingModalComponent
