// MyChartComponent.js

import React from 'react';


export const data = {
	labels: ['Easy', 'Medium', 'Hard'],
	datasets: [{
			label: 'Score is',
			
			data: [12, 15, 3],
			backgroundColor: [
				'#de5d5b',
				'#9451e0',
				'#45dfb1',
			],
			borderColor: [
				'#de5d5b',
				'#9451e0',
				'#45dfb1',
			],
			borderWidth: 1,
		},
	],
};

export const data2 = {
	labels: ['Score'],
	datasets: [{
			label: 'Score is',
			
			data: [12],
			backgroundColor: [
				'#0835e8',
			],
			borderColor:[
				'#0835e8',
			],
			borderWidth: 1,
		},
	],
};
