import React from 'react'
import { ReactSession } from 'react-client-session';
import Chart1 from '../components/charts/Chart1';
import Chart2 from '../components/charts/Chart2';
import Chart3 from '../components/charts/Chart3';
import Sidenav from '../components/Sidenav';

const Apexchart = () => {
    return (
        <div >
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <div className="apexChartMain">
                <div className="charts chartsfusion">
                    <Chart1/>

                </div>
            </div>
        </div>
    )
}

export default Apexchart;
