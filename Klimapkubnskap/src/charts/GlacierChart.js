import React, { useState } from 'react';
import Glacier from '../json_data/Glacier';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function GlacierChart() {
  // Saves data about sea level in a state variable, if it is not already set
  const [data, setData] = useState([]);
  if (data[0] === undefined) {
    setData(Glacier);
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
          dataKey="Mean cumulative mass balance"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}