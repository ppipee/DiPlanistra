import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

type AvailableFontSizes = 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 64

const fontSizes: buildPxType<AvailableFontSizes> = buildPx

export default fontSizes
