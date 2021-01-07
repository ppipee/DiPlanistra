import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

export type AvailableSpaceSizes = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20 | 24 | 32 | 36 | 40 | 48 | 64

const spaces: buildPxType<AvailableSpaceSizes> = buildPx

export default spaces
