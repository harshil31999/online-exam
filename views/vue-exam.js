var app = new Vue({
	el:'#vue-app',
	data: {
		message: 'Hello username!',
		questions: [
			{ 	text: 'What are the number of hours in a day?',
				options: [
					{ option: 24 },
					{ option: 15 },
					{ option: 12 },
					{ option: 36 }
				],
				answer: 24
				},
			{ 	text: 'What are the number of days in a leap year?',
				options: [
					{ option: 250 },
					{ option: 364 },
					{ option: 365 },
					{ option: 366 }
				],
				answer: 366
				},
			{ 	text: 'How many seconds make a minute?',
				options: [
					{ option: 24 },
					{ option: 60 },
					{ option: 30 },
					{ option: 180 }
				],
				answer: 60
				}
		],
		counter: 0
	}
	//delimiters: ["<%" , "%>"]
});

//Vue.config.delimiters = ['${','}']
