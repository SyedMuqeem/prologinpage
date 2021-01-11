import React from 'react'
import { ReactSession } from 'react-client-session';
import Chart3 from '../components/charts/Chart3';
import Sidenav from '../components/Sidenav';

const ApexChart2 = () => {
    return (
        <div  >
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <div className="apexChartMain">
                <div className="charts">
                    <Chart3/>

                </div>
            </div>
        </div>
    )
}

export default ApexChart2;
