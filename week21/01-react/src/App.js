import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

function App() {
  const data = {
    labels: ['Work', 'Eat', 'Commute', 'Watch TV', 'Sleep'],
    datasets: [
      {
        label: '# of Procent',
        data: [45.8, 8.3, 8.3, 8.3, 29.2],
        backgroundColor: [
          'rgba(51, 23, 232, 0.93)',
          'rgba(232, 54, 23, 0.93)',
          'rgba(215, 137, 20, 0.93)',
          'rgba(12, 216, 36, 0.93)',
          'rgba(180, 23, 232, 0.93)',
        ],
        hoverBackgroundColor: [
          'rgba(51, 23, 232, 0.47)',
          'rgba(232, 54, 23, 0.44)',
          'rgba(215, 137, 20, 0.38)',
          'rgba(12, 216, 36, 0.42)',
          'rgba(180, 23, 232, 0.46)',
        ],
        borderColor: [
          'rgba(246, 246, 246, 0.93)',
          'rgba(246, 246, 246, 0.93)',
          'rgba(246, 246, 246, 0.93)',
          'rgba(246, 246, 246, 0.93)',
          'rgba(246, 246, 246, 0.93)',
        ],
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 30,
          padding: 15,
          font: {
            size: 15,
            weight: 'bold',
            family: 'Arial',
          },
        },
      },
      datalabels: {
        display: true,
        color: 'white',
        font: {
          weight: 'bold',
          size: 18,
        },
        formatter: (value) => `${value}%`,
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ width: '550px', height: '550px' }}
    >
      <Pie data={data} options={options} />
      <h1 className="chart-title">Balance Life</h1>
    </div>
  );
}

export default App;
