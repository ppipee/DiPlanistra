export enum BreakPoints {
	xxs = 342,
	xs = 575,
	sm = 767,
	md = 984,
	lg = 1199,
}

export enum LowerBreakPoints {
	xxs = 0,
	xs = BreakPoints.xxs + 1,
	sm = BreakPoints.xs + 1,
	md = BreakPoints.sm + 1,
	lg = BreakPoints.md + 1,
}

export type ScreenName = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
