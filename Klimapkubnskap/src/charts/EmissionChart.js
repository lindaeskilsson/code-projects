import React, { useState } from 'react';
import Emission from '../json_data/Emission';

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

export default function EmissionChart() {
  // Saves data about CO2 Emissions in a state variable, if it is not already set
  const [data, setData] = useState([]);
  if (data[0] === undefined) {
    setData(Emission);
  }

  // stores index of the selected year (default value is index 250, which is the year 2010)
  const [indexYear, setIndexYear] = useState(250);

  // Sets data about the selected year when the enter key is pressed
  const handleYear = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value > 1750 && e.target.value < 2011) {
        // Finds the index of the selected year
        let index = data.findIndex(
          (CO2Data) => CO2Data.Year === parseInt(e.target.value)
        );
        setIndexYear(index);
      }
    }
  };

  // Stores data about the year that matches the selected index
  let selectedYear = data[indexYear];

  // Displays an error message if no data is available
  if (selectedYear === undefined) return <p>Det finns ingen data</p>;

  // Stores data about the selected year for the pie chart
  const CO2Data = [
    { name: 'Gasbränsle', value: selectedYear['Gas Fuel'] },
    { name: 'Flytande bränsle', value: selectedYear['Liquid Fuel'] },
    { name: 'Fast bränsle', value: selectedYear['Solid Fuel'] },
    { name: 'Cement', value: selectedYear['Cement'] },
    { name: 'Gaseldning', value: selectedYear['Gas Flaring'] },
  ];

  // Variables used to give each cell in the pie chart a different colour
  const Colours = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  // Renderas the pie chart based on the data in CO2Data
  return (
    <div>
      <input
        type="text"
        placeholder={selectedYear.Year}
        onKeyDown={(e) => handleYear(e)}
      ></input>
      <PieChart width={400} height={350} className="Chart">
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={CO2Data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          <Cell fill={Colours[0]} />
          <Cell fill={Colours[1]} />
          <Cell fill={Colours[2]} />
          <Cell fill={Colours[3]} />
          <Cell fill={Colours[4]} />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
