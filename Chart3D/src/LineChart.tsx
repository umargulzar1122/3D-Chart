import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
import * as React from 'react'
const lineChartOptions = {
	chart: {
		options3d: {
			enabled: true,
			alpha: 25,
			beta: 5
		}
	},
	title: {
		text: 'Monthly expenses',
		align: 'left'
	},
	accessibility: {
		point: {
			valueSuffix: '%'
		}
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		column: {
			allowPointSelect: true,
			cursor: 'pointer',
			depth: 35,
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}
	},
	series: [{
		type: 'line',
		name: 'Share',
		data: [
			['Groceries', 23],
			['Transportation', 18],
			['Utilities*', 9],
			['Entertainment', 8],
		]
	}]
}
highcharts3d(Highcharts);
const LineChart = () => {
	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={lineChartOptions}
			/>
		</>
	)
}

export default LineChart