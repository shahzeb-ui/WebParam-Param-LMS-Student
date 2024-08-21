'use client'

import { IChart } from "./lib/IChart";
import Chart from "react-apexcharts";

interface ISparkLineChartProps extends IChart {
    //additional props here
}
export default function SparkLineChart( chart:ISparkLineChartProps) {


    return (
        <>

            <Chart options={chart.options} series={chart.series} type="line" />


        </>
    )
}