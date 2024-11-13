import React, { useState } from 'react';
import Temperature from '../json_data/Temperature';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function TempChart() {
  // Saves data about sea level in a state variable, if it is not already set
  const [data, setData] = useState([]);
  if (data[0] === undefined) {
    setData(Temperature);
  }

  // Renders a line chart based on the data
  return (
    <div>
      <LineChart width={750} height={500} data={data} className="Chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Mean"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}