import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d'
import * as React from 'react';

highcharts3d(Highcharts)

export const BarChart = () => {
	const barChartOptions = {
		chart: {
			options3d: {
				enabled: true,
				alpha: 25,
				beta: 25
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
			bar: {
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
			type: 'bar',
			name: 'Share',
			data: [
				['Groceries', 23],
				['Transportation', 18],
				['Utilities*', 9],
				['Entertainment', 8],
			]
		}]
	};

	return (
		<>
			<HighchartsReact
				highcharts={Highcharts}
				options={barChartOptions}
			/>
		</>
	);
};