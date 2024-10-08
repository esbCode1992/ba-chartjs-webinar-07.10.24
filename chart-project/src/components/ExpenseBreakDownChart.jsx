import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { myCompany } from '../data/data'

const ExpenseBreakDownChart = () => {
    //Ocak Ay İçin
    const breakdown = myCompany.expenseBreakdown["Ocak"];

    const chartData = {
        labels:["Personel","Kiralar","Kamu Hizmetleri","Pazarlama","Ofis Malzemeleri"],
        datasets:[
            {
            label:"Gider Dağılımı",
            data:[breakdown.personnel,breakdown.rent,breakdown.utilities,breakdown.marketing,breakdown.officeSupplies],
            backgroundColor:["orange","blue","grey","yellow","hotpink"],
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
                text: "Ocak Ayı Gider Dağılımı"
            }
        },
      }
  return (
    <div>
        <Pie data={chartData} options={chartOptions}/>
    </div>
  )
}

export default ExpenseBreakDownChart