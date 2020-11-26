import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

type AvailableSpaces = 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 64

const fontSizes: buildPxType<AvailableSpaces> = buildPx

export default fontSizes
