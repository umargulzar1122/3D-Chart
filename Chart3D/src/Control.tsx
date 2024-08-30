import * as React from 'react'
import HighchartsReact from 'highcharts-react-official'
import * as Highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import { IInputs } from '../generated/ManifestTypes'
import { PieChart } from './PieChart'
import { BarChart } from './BarChart'
import ColumnChart from './ColumnChart'
import LineChart from './LineChart'
type Props = {
	context: ComponentFramework.Context<IInputs>
}
const Control = ({ context }: Props) => {
	return (
		<>
			{
				context.parameters.chartType.raw! === "Pie Chart" &&
				<PieChart />
			}
			{
				context.parameters.chartType.raw! === "Bar Chart" &&
				<BarChart />
			}
			{
				context.parameters.chartType.raw! === "Column Chart" &&
				<ColumnChart />
			}
			{
				context.parameters.chartType.raw! === "Line Chart" &&
				<LineChart />
			}
		</>
	)
}

export default Control