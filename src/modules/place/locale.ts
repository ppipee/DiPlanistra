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
