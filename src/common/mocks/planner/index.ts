import { Planner, ActivityPlace } from 'modules/trips/types/planner'

export const ACTIVITY_PLACE = ({
	publicId: '587657ci',
	name: 'บ้านแม่กำปอง',
	coordinate: {
		lat: 18.865625085974578,
		lng: 99.35091244920878,
	},
	mainPhoto: {
		photoId: '7578701ff6df4722a84fc4f026aec388',
		url: 'photos/7578701ff6df4722a84fc4f026aec388',
		description: null,
		contentUrl: 'https://img.wongnai.com/p/_-x_/2018/04/26/7578701ff6df4722a84fc4f026aec388.jpg',
		width: 1920,
		height: 1280,
		photoUrl: 'photos/7578701ff6df4722a84fc4f026aec388',
		thumbnailUrl: 'https://img.wongnai.com/p/100x100/2018/04/26/7578701ff6df4722a84fc4f026aec388.jpg',
		smallUrl: 'https://img.wongnai.com/p/400x0/2018/04/26/7578701ff6df4722a84fc4f026aec388.jpg',
		largeUrl: 'https://img.wongnai.com/p/1920x0/2018/04/26/7578701ff6df4722a84fc4f026aec388.jpg',
	},
	defaultPhoto: {
		photoId: 'ceda5d67b6174e62887e1376b55c88a1',
		url: 'photos/ceda5d67b6174e62887e1376b55c88a1',
		description: null,
		contentUrl: 'https://img.wongnai.com/p/_-x_/2019/02/10/ceda5d67b6174e62887e1376b55c88a1.jpg',
		width: 1920,
		height: 1440,
		photoUrl: 'photos/ceda5d67b6174e62887e1376b55c88a1',
		thumbnailUrl: 'https://img.wongnai.com/p/100x100/2019/02/10/ceda5d67b6174e62887e1376b55c88a1.jpg',
		smallUrl: 'https://img.wongnai.com/p/400x0/2019/02/10/ceda5d67b6174e62887e1376b55c88a1.jpg',
		largeUrl: 'https://img.wongnai.com/p/1920x0/2019/02/10/ceda5d67b6174e62887e1376b55c88a1.jpg',
	},
	workingHoursStatus: {
		open: false,
		message: 'จะเปิดในวันเสาร์ เวลา 06:00',
		closingSoon: false,
	},
	rating: 4.2594142259414225,
	categories: [
		{
			id: 4302,
			name: 'ชุมชน',
			// domain: {
			// 	name: 'ATTRACTION',
			// 	value: 4,
			// },
		},
		{
			id: 4411,
			name: 'ไร่/ฟาร์ม/สวนเกษตร',
			// domain: {
			// 	name: 'ATTRACTION',
			// 	value: 4,
			// },
		},
		{
			id: 4410,
			name: 'ภูเขา',
			// domain: {
			// 	name: 'ATTRACTION',
			// 	value: 4,
			// },
		},
	],
	priceRange: null,
	entryFee: {
		adult: 100,
		children: 0,
		feeCondition:
			'จุดชมวิว มหานคร สกายวอล์ค ผู้ใหญ่ราคา 880 บาท เด็ก (ต่ำกว่า 12 ปี) และผู้สูงอายุ 60 ปีขึ้นไป ราคา 250 บาท',
		currency: '฿',
	},
} as unknown) as ActivityPlace

const PLANNER = ({
	id: '5fd509de0689ed3536711d86',
	name: 'testPlanner',
	startDate: '2020-12-11T07:41:46.169Z',
	endDate: '2020-12-13T07:41:46.169Z',
	dateLength: 2,
	rating: 0,
	isPublic: false,
	planners: [
		{
			day: 1,
			title: 'Gooo~~~~~',
			activities: [
				{
					hour: { from: '10:00', to: '12:00' },
					place: ACTIVITY_PLACE,
					memo: '',
					distance: '3000',
				},
				{
					hour: { from: '6:00', to: '10:00' },
					place: ACTIVITY_PLACE,
					memo:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th",
					distance: '2000',
				},
				{
					hour: { from: '12:00', to: '14:00' },
					place: ACTIVITY_PLACE,
					memo: '',
					distance: null,
				},
			],
		},
		{ day: 2, activities: [] },
	],
	style: { showCover: true },
	writer: { id: '5fd263e59d7d3583a36d4076', email: 'ppipee', name: 'pipe', role: 'admin' },
} as unknown) as Planner

export default PLANNER
