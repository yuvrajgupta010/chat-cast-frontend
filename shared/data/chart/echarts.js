
export const echart1 = {
	option: {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		grid: {
			left: '6%',
			right: '3%',
			bottom: '8%',
			top: '3%',
		},
		xAxis: [
			{
				type: 'category',
				axisTick: {
					alignWithLabel: true
				},
				// prettier-ignore
				data: [2014, 2015, 2016, 2017, 2018]
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLine: {
					show: true,
				},
			},
			{
				type: 'value',
				axisLine: {
					show: true,
				},
			},
			{
				type: 'value',
				axisLine: {
					show: true,
				},
			}
		],
		series: [
			{
				type: 'bar',
				data: [10, 15, 9, 18, 10],
				color: ['#53caed'],

			},
			{
				type: 'bar',
				data: [10, 14, 10, 15, 9],
				color: ['#6259ca']

			},
			{
				type: 'line',
				data: [8, 5, 25, 10, 10],
				color: ['#53caed'],
				smooth: "true"
			}
		]
	}
};
export const echart2 = {
	option: {
		legend: {},
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
			data: ['2014', '2015', '2016', '2017', '2018'],
			
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: ['rgba(119, 119, 142, 0.2)']
				}
			},

		},
		series: [
			{
				type: 'line',
				smooth: true,
				data: ['12', '25', '12', '35', '12', '20'],
				color: ['#53caed']
			},
			{
				type: 'line',
				smooth: true,
				data: ['9', '11', '28', '10', '10', '15'],
				color: ['#6259ca']
			}
		]
	}
};
export const echart3 = {
	option: {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '40',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},

		xAxis: {
			type: 'value',

		},
		yAxis: {
			type: 'category',
			data: ['2014', '2015', '2016', '2017', '2018'],
			splitLine: {
				lineStyle: {
					color: ['rgba(119, 119, 142, 0.2)']
				}
			},
		},
		series: [
			{
				type: 'bar',
				data: [10, 15, 9, 18, 10],
				color: ["#6259ca"]
			},
			{
				type: 'bar',
				data: [10, 14, 10, 15, 9],
				color: ['#53caed']
			},
			{
				type: 'line',
				data: [8, 5, 25, 10, 10],
				color: ['#53caed']
			}
		]
	}
};
export const echart4 = {
	option: {

		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '40',

		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},

		xAxis: {
			type: 'value',
		},
		yAxis: [
			{
				name: 'sales',
				type: 'category',
				data: ['2014', '2015', '2016', '2017', '2018']
			}
		],
		series: [
			{
				name: 'Profit',
				type: 'line',
				smooth: true,
				data: ['12', '25', '12', '35', '12', '20'],
				color: ['#53caed'],
			},
			{
				type: 'line',
				smooth: true,
				data: ['9', '11', '28', '10', '10', '15'],
				color: ['#6259ca']

			}
		]
	}
};
export const echart5 = {
	option: {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		}, tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
			type: 'category',
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: ['rgba(119, 119, 142, 0.2)']
				}
			},

		},
		series: [
			{
				name: 'sales',
				type: 'bar',
				stack: 'Stack',
				data: [14, 18, 20, 14, 29, 21, 25, 14, 24],
				color: ['#6259ca']
			},
			{
				name: 'Profit',
				type: 'bar',
				stack: 'Stack',
				data: [12, 14, 15, 50, 24, 24, 10, 20, 30],
				color: ['#53caed']
			}
		]
	}
};
export const echart6 = {
	option: {
		grid: {
			top: '6',
			right: '10',
			bottom: '17',
			left: '40',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
			type: 'value',
		},
		yAxis: {
			type: 'category',
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			splitLine: {
				lineStyle: {
					color: ['rgba(119, 119, 142, 0.2)']
				}
			},
		},
		series: [
			{
				name: 'sales',
				type: 'bar',
				stack: 'Stack',
				data: [14, 18, 20, 14, 29, 21, 25, 14, 24],
				color: ['#6259ca']
			},
			{
				name: 'Profit',
				type: 'bar',
				stack: 'Stack',
				data: [12, 14, 15, 50, 24, 24, 10, 20, 30],
				color: ['#53caed']
			}
		]
	}
};
export const echart7 = {
	option: {

		xAxis: {
			type: 'category',
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [20, 20, 36, 18, 14, 20, 25, 20],
				type: 'line'
			}
		]
	}
};
export const echart8 = {
	option: {
		xAxis: {
			type: 'category',
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [20, 20, 36, 18, 14, 20, 25, 20],
				type: 'line',
				smooth: true
			}
		]
	}
};
