import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import BarChart  from './Components/BarChart';

import DoughnutChart from  './Components/DoughnutChart' 

import MultiLineChart from './Components/MultiLineChart'

function App() {
  return (
    <div className="App" height="10px">
      <header className="App-header" height="10px" >
        <img src={logo} className="App-logo" height="10px" alt="logo" />
               </header>
      
        <table width="50%">
        <tr>
          <td>
          <BarChart />
          </td>
          <td >
          <BarChart options={{ indexAxis: 'y'}} />
          </td>
          
        </tr>
 <tr>
 <td>
    
         <MultiLineChart />
          </td>
          <td>
          <DoughnutChart/>
          </td>
          

 </tr>
</table>
       
        
    </div>
    
  );
}

export default App;
