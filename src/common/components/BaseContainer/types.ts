import { ScreenName } from 'common/styles/utils/viewport/screenSizes'

export interface BaseContainerProps {
	$screen?: ScreenName
	$padding?: string
	$paddingMobile?: string
	$margin?: string
	$marginMobile?: string
}
