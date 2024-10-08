import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { myCompany } from '../data/data'

const IncomeBreakDownChart = () => {
    //Ocak Ay İçin
    const breakdown = myCompany.incomeBreakdown["Ocak"];

    const chartData = {
        labels:["Ürün Satışları","Hizmetler","Yatırımlar"],
        datasets:[
            {
            label:"Gelir Dağılımı",
            data:[breakdown.productSales,breakdown.services,breakdown.investments],
            backgroundColor:["lightsalmon","lightblue","lightgrey"],
            borderColor:["white"],
            borderWith: 2
            }
        ]
    }
    const chartOptions = {
        responsive: true,
        plugins:{
            legend:{
                position:"bottom"
            },
            title: {
                display: true,
                text: "Ocak Ayı Gelir Dağılımı"
            }
        },
      }
  return (
    <div>
        <Pie data={chartData} options={chartOptions}/>
    </div>
  )
}

export default IncomeBreakDownChart