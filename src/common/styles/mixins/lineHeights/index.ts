import buildPx, { buildPxType } from 'common/styles/utils/buildPx'

type AvailableLineHeights = 16 | 18 | 20 | 24 | 32

const lineHeights: buildPxType<AvailableLineHeights> = buildPx

export default lineHeights
