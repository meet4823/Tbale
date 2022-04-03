
import React from 'react';
import './App2.css';
import Foot from './Footer';
import Head from './Head';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
function DashboardPage1 () {
  const data = [
    { name: "Meet", upload: 20 },
    { name: "Muskan", upload: 15},
    { name: "Monika", upload: 10},
    { name: "Priyanka", upload: 50},
  ];

  return (
    <>
  <Head/>
    <div style={{ textAlign: "center"}} id="black">
      <div className="App2" style={{ marginTop:"100px"}}>
       
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={35}
          style={{ marginLeft:"220px"}}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="upload" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        <PieChart width={900} height={900} style={{ marginLeft:"350px"}}>
          <Pie
            dataKey="upload"
            isAnimationActive={false}
            data={data}
            cx={400}
            cy={400}
            outerRadius={170}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <Foot/>
      </div>
    </div>
    </>
  );
}
export default DashboardPage1;
