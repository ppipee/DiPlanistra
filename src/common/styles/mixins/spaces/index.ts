import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

type AvailableFontSizes = 4 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 64

const spaces: buildPxType<AvailableFontSizes> = buildPx

export default spaces
