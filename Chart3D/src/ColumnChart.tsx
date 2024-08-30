import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from 'highcharts/highcharts-3d';
import * as React from 'react'
const columnChartOptions = {
	chart: {
		options3d: {
			enabled: true,
			alpha: 35,
			beta: 10
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
		type: 'column',
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
const ColumnChart = () => {

	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={columnChartOptions}
			/>
		</>
	)
}

export default ColumnChart