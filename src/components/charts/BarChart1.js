import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import moment from "moment"

const BarChart1 = () => {
    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
    const getChartData = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/building/totalConsumption", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("api BarChart1", data.data?.week[0].data);
            setData(data.data?.week[0].data)


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getChartData() }, [])

    // time convert and map
    const timesofday = (datatime) => {
        return moment(datatime).format('dddd')
    }


    var series = [
        {
            name: "Water Consumption",
            data: data
        }
    ]

    var options = {
        chart: {
            // id: "basic-bar"
            background: '#494950',
            foreColor: '#fff'
        },
        xaxis: {
            categories: ["liters"]
        },
        fill: {
            colors: ['rgba(0, 143, 251, 0.85)']
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLables: {
            enabled: false
        },
        title: {
            text: 'TOTAL CONSUMPTION OF WATER',
            align: 'center',
            margin: 20,
            style: {
                fontSize: '15px',
            }
        }
    }
    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="150%"

        />
    )
}

export default BarChart1;
