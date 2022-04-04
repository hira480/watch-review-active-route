import React from 'react';
import MyLineChart from '../LineChart/LineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboart.css';

const DashBoard = () => {
    return (
        <div>
            <h2>Tis is dashboard</h2>
            <div className='dashboard'>
                <MyLineChart></MyLineChart>
                <MyPieChart></MyPieChart>
            </div>
        </div>
    );
};

export default DashBoard;