import React from 'react'

import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const Charts = ({ data }) => {
    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ border: '1px solid' }}>
                    <DoughnutChart serverData={data} />
                </div>

                <div style={{ border: '1px solid' }}>
                    <RadarChart serverData={data} />
                </div>

            </div>

            <div style={{ border: '1px solid', marginTop: '15px' }}>
                <BarChart serverData={data} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div style={{ border: '1px solid' }}>
                    <PolarChart serverData={data} />
                </div>

                <div style={{ border: '1px solid' }}>
                    <PieChart serverData={data} />
                </div>

            </div>

            <div style={{ border: '1px solid', marginTop: '15px' }}>
                <LineChart serverData={data} />
            </div>

        </div>
    )
}

export default Charts