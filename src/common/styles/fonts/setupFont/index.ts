import { css } from 'styled-components'

import { FontSetting } from '../types'

function setupFonts(fontName: string, fontSettings: FontSetting[]) {
	return css`
		${fontSettings.map(
			({ weight, style, sources }) => css`
				@font-face {
					font-family: ${fontName};
					font-weight: ${weight};
					font-style: ${style};
					src: local('${fontName}'), ${sources.map(({ src, format }) => `url('${src}') format('${format}')`).join(',')};
				}
			`,
		)};
	`
}

export default setupFonts
