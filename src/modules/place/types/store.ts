import { DomainValue } from 'common/constants/business'

import { PlacePreview } from './place'

export type NearbyPositionType = Partial<Record<DomainValue, PlacePreview[]>>
