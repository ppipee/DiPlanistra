export const ATTRACTION = ['ที่เที่ยว', 'Attraction']
export const FOOD = ['อาหาร', 'Food']
export const HOTEL = ['ที่พัก', 'Hotel']
export const TRIP = ['ทริป', 'Trip']
export const EVENT = ['อีเว้นต์', 'Event']

export const ATTRACTION_TITLE = ['สถานที่ท่องเที่ยว', 'Attraction']
export const FOOD_TITLE = ['ร้านอาหาร', 'Food']
export const HOTEL_TITLE = ['ที่พัก', 'Hotel']
export const TRIP_TITLE = ['ทริป', 'Trip']
export const EVENT_TITLE = ['งานอีเว้นต์', 'Event']

export const REVIEW_UNIT = [
	'{review} รีวิว',
	`{review} {review,plural,
    =0 {review}
    =1 {review}
    other {reviews}}`,
]

export const CLOSED_STATUS = ['ปิดอยู่', 'closed']
export const OPENED_STATUS = ['เปิดอยู่', 'opened']
export const CLOSED_DAY = ['ปิดบริการ', 'closed']

export const ADULT = ['ผู้ใหญ่', 'Adult']
export const CHILD = ['เด็ก', 'Child']

export const ADULT_ENTRY_FEE = [
	`{fee,plural,
    =0 {ฟรี}
    other {{fee} {currency}  /คน}
    }`,
	`{fee,plural,
    =0 {Free}
    other {{fee} {currency}  /person}
    }`,
]
export const CHILD_ENTRY_FEE = [
	`{fee,plural,
    =0 {ฟรี}
    other {{fee}{currency}  /คน}
    }`,
	`{fee,plural,
    =0 {Free}
    other {{fee}{currency}  /person}
    }`,
]

export const ENTRY_FEE = [
	`{fee,plural,
    =0 {ไม่เสียค่าเข้าชม}
    other {ค่าเข้าชม {fee}{currency}}
    }`,
	`{fee,plural,
    =0 {Fee-Free}
    other {Fee: {fee}{currency} /person}
    }`,
]

export const PLACE_EMPTY = ['ไม่เจอสถานที่ที่ค้นหา', 'Not found place']

export const FAVORITE_PLACE_EMPTY = ['ไม่มีสถานที่ที่บันทึกไว้', 'Not found Favorite Place']
export const FAVORITE_EVENT_EMPTY = ['ไม่มีอีเว้นต์ที่บันทึกไว้', 'Not found Favorite Event']
