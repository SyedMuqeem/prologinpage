import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { ReactSession } from 'react-client-session';

const ChartForWeeklyCompar = () => {
    const [values, setValues] = useState([])
    const [lastValues, setLastValues] = useState([])
    const [xAxisValue, setXAxisValue] = useState([])

    const getChartData = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/building/weekComp", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("api ChartForWeeklyCompar", data.data);
            // console.log("api ChartForWeeklyCompar xAxisValue", data.data?.x_axis_start);
            setValues(data.data?.values)
            setLastValues(data.data?.lastValues)


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getChartData() }, [])


    var series = [
        {
            name: 'Present Week',
            type: 'column',
            data: values
        }, {
            name: 'Last Week',
            type: 'line',
            data: lastValues
        }
    ]

    var options = {
        chart: {
            height: 350,
            type: 'line',
            background: '#494950',
            foreColor: '#fff'
        },
        stroke: {
            width: [0, 4]
        },
        title: {
                    text: 'WEEKLY COMPARISON',
                    margin: 20,
                    style: {
                        fontSize: '15px'
                    }
                },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        xaxis: {
                    categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN']
                },
          
       
    }


    // var options = {
    //     chart: {
    //         // id: "basic-bar"
    //         type: 'line',
    //         background: '#494950',
    //         foreColor: '#fff'
    //     },
    //     stroke: {
    //                 width: [0, 4]
    //             },
    //     xaxis: {
    //         categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN']
    //     },
    //     plotOptions: {
    //         bar: {
    //             horizontal: false
    //         }
    //     },
    //     dataLables: {
    //         enabled: true,
    //         enabledOnSeries: [1]
    //     },
    //     title: {
    //         text: 'WEEKLY COMPARISON',
    //         margin: 20,
    //         style: {
    //             fontSize: '25px'
    //         }
    //     }
    // }






    return (
        <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="350%"

        />
    )

}

export default ChartForWeeklyCompar;
