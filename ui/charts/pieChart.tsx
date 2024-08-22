import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PieChart() {
    const rawData = [44, 55, 90, 8, 22, 10, 20, 30, 40, 50, 60, 70];
    const total = rawData.reduce((acc, value) => acc + value, 0);
    const percentageData = rawData.map(value => Math.round((value / total) * 100));
    
  const [chartOptions, setChartOptions] = useState({
    series: percentageData,
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      title: {
        text: 'Classes Attended',
        style: {
          fontSize: '20px',
          color: '#333'
        }
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      colors: ['#FF4560', '#00E396', '#008FFB', '#FEB019', '#775DD0', '#FF66C4', '#D10CE8', '#00D9E9', '#FFC300', '#32D9CB', '#546E7A', '#D4526E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 380
          },
          legend: {
            position: 'bottom'
          }
        },
        title: {
            text: 'Classes Attended',
            style: {
              fontSize: '14px',
              marginLeft: '10px',
              color: '#333'
            }
          },
      }]
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          options={chartOptions.options as any} 
          series={chartOptions.series} 
          type="pie" 
          width={380} 
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

