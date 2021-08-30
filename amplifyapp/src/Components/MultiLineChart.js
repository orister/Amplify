import React from 'react';
import { Line } from 'react-chartjs-2';

const dataforgraph = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 10, 8, 6, 4, 2],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# of No Votes',
      data: [14, 15, 10, 6, 4, 2],
      fill: true,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const optionData = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
      
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
        data={dataforgraph}
       options = {optionData}
       
      />
    </div>
    );
  }
}
