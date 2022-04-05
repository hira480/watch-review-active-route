import React from 'react';
import './MyPieChart.css';
import { PieChart, Pie, Tooltip, } from "recharts";

const MyPieChart = () => {

    const data01 = [
        { name: "Mar", value: 100000 },
        { name: "Apr", value: 200000 },
        { name: "May", value: 500000 },
        { name: "Jun", value: 500000 },
        { name: "Jul", value: 600000 },
        { name: "Aug", value: 700000 },
    ];
    const data02 = [
        { name: "Mar", value: 10401 },
        { name: "Apr", value: 24500 },
        { name: "May", value: 97010 },
        { name: "Jun", value: 90405 },
        { name: "Jul", value: 250900 },
        { name: "Aug", value: 301000 },
    ];
    return (
        <div className='container'>
            <h3>Pie Chart About Investment and Profit per month</h3>
            <PieChart width={500} height={400}>
                <Pie
                    data={data01}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    outerRadius={100}
                    fill="#8884d8"
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    innerRadius={130}
                    outerRadius={170}
                    fill="#82ca9d"
                    label
                />
                <Tooltip></Tooltip>
            </PieChart>
        </div>

    );
};

export default MyPieChart;