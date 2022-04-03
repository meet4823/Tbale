import React, { useState } from "react";
import StackedAreaChart from "../D3/StackedAreaChart";
import StackedBarChart from "../D3/StackedBarChart";
import './Dcss.css';
import Foot from './Footer';
import Head from './Head';
const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "orange",
  "🍆": "purple"
};

function Main() {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState([
    {
      year: 1980,
      "🥑": 10,
      "🍌": 20,
      "🍆": 30
    },
    {
      year: 1990,
      "🥑": 20,
      "🍌": 40,
      "🍆": 60
    },
    {
      year: 2000,
      "🥑": 30,
      "🍌": 45,
      "🍆": 80
    },
    {
      year: 2010,
      "🥑": 40,
      "🍌": 60,
      "🍆": 100
    },
    {
      year: 2020,
      "🥑": 50,
      "🍌": 80,
      "🍆": 120
    }
  ]);

  return (
    <>
    <Head/>
    <h2 style={{textAlign:"center"}}>Stacked Area Chart with D3 </h2>
    <div id="droot">
      
      <StackedAreaChart data={data} keys={keys} colors={colors}/>
      <StackedBarChart data={data} keys={keys} colors={colors} />

      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>

    
    </div>
    <Foot/>
    </>
  );
}

export default Main;
