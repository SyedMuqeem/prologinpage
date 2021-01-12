import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import BreadCrumbsForApp from '../breadcrums/BreadCrumbsForApp'
import BarChartForWeek from '../charts/BarcharforWeek'
import BarChart1 from '../charts/BarChart1'
import BarChartForDailyData from '../charts/BarChartForDailyData'
import BarChartForMonth from '../charts/BarChartForMonth'
import ChartForWeeklyCompar from '../charts/ChartForWeeklyCompar'
import DataTableForDay from '../dataTables/DataTableForDay'
import DataTableForMonth from '../dataTables/DataTableForMonth'
import DataTableForWeek from '../dataTables/DataTableForWeek'

const WaterMansDet = () => {
    const [dispGraph, setDispGraph] = useState("day")
    const [chartTable, setChartTable] = useState(true)
    return (
        <div className="waterManagment">
            <BreadCrumbsForApp />
            <div className="barGraph1inWater">
                <BarChart1 />
            </div>
            <div className="barGraph1inWater mt-4 p-5">
                <ChartForWeeklyCompar />
            </div>
            <div className="barwaterflexmain mt-4">


                {chartTable ? (
                    dispGraph === "day" ? (
                        <div className="barwaterflex p-5" ><BarChartForDailyData /></div>
                    ) : (
                            dispGraph === "week" ? (
                                <div className="barwaterflex p-5" ><BarChartForWeek /></div>
                            ) : (
                                    <div className="barwaterflex p-5" ><BarChartForMonth /></div>
                                )

                        )
                ) : (
                        dispGraph === "day" ? (
                            <div className="barwaterflex p-5 " ><DataTableForDay /></div>
                        ) : (
                                dispGraph === "week" ? (
                                    <div className="barwaterflex p-5" ><DataTableForWeek /></div>
                                ) : (
                                        <div className="barwaterflex p-5" ><DataTableForMonth /></div>
                                    )

                            )
                    )

                }

                {/* <div className="barwaterflex p-5" >
                    <DataTableForDay/>
                    <DataTableForWeek/>
                    <DataTableForMonth />
                </div> */}






                <div className="barwaterflex1 ">
                    <div className="cardWaterMan"><h3>WATER MANAGEMENT</h3></div>
                    <div className="cardWaterManbutton mt-4">
                        <button className="cardWaterManbutton1" onClick={() => { setDispGraph("day") }}>Day</button>
                        <button className="cardWaterManbutton1 ml-5 mr-5" onClick={() => { setDispGraph("week") }}>Week</button>
                        <button className="cardWaterManbutton1" onClick={() => { setDispGraph("month") }}>Month</button>
                    </div>
                    <div className="cardWaterManRupees">
                        INR 3327.56<br />
                        <span>TOTAL WATER CONSUPTION: 41594.50</span>
                    </div>
                    <div className="cardWaterManfooter mt-3">
                        <button className="cardWaterManFooter1 cardWaterManbutton1" onClick={() => { setChartTable(true) }}>Chart</button>
                        <div className=" ml-auto mr-auto"></div>
                        <button className="cardWaterManFooter1 cardWaterManbutton1" onClick={() => { setChartTable(false) }}>Table</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WaterMansDet;
