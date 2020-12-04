import { css } from 'styled-components'

import setupFont from './setupFont'
import { FontSetting } from './types'

const DBHeaventNowSettings: FontSetting[] = [
	{
		weight: 'bold',
		style: 'normal',
		sources: [
			{
				src: require('./DBHeaventNow/DBHeaventNow-Bold.woff2'),
				format: 'woff2',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-Bold.woff'),
				format: 'woff',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-Bold.ttf'),
				format: 'truetype',
			},
		],
	},
	{
		weight: 'bold',
		style: 'italic',
		sources: [
			{
				src: require('./DBHeaventNow/DBHeaventNow-BoldIt.woff2'),
				format: 'woff2',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-BoldIt.woff'),
				format: 'woff',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-BoldIt.ttf'),
				format: 'truetype',
			},
		],
	},
	{
		weight: 'normal',
		style: 'normal',
		sources: [
			{
				src: require('./DBHeaventNow/DBHeaventNow.woff2'),
				format: 'woff2',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow.woff'),
				format: 'woff',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow.ttf'),
				format: 'truetype',
			},
		],
	},
	{
		weight: 'normal',
		style: 'italic',
		sources: [
			{
				src: require('./DBHeaventNow/DBHeaventNow-Italic.woff2'),
				format: 'woff2',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-Italic.woff'),
				format: 'woff',
			},
			{
				src: require('./DBHeaventNow/DBHeaventNow-Italic.ttf'),
				format: 'truetype',
			},
		],
	},
]

export const setup = css`
	${setupFont('DB Heavent Now', DBHeaventNowSettings)}
`
