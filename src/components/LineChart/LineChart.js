import React from 'react';
import './LineChart.css';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const MyLineChart = () => {

    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 97010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 90405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 250900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 301000
        }
    ]

    return (
        <div className='container'>
            <h3>Line Chart about Sell invest and profit</h3>
            <LineChart width={600} height={400} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>

    );
};

export default MyLineChart;