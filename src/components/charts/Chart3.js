import React, { useEffect, useState } from 'react'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import moment from "moment"



const Chart3 = () => {


    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
    const [horizontal, setHorizontal] = useState(true)
    const getChartData = async () => {
        try {
            const data = await axios.put(
                "  https://api.perisync.com/admin/building/daily", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
                "macvalue": "demo"
            }
            );
            console.log("api chart3", data.data);
            setData(data.data?.values)
            setDatatime(data.data?.x_axis_start);

            console.log("apidata", data.data?.values);


        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getChartData() }, [])
    useEffect(() => {
        console.log("apidatastates", data);
    }, [data])

    // time convert and map
    const timesofday = (datatime) => {
        return moment(datatime).format('dddd')
    }


    var series = [
        {
            name: "series-1",
            data: data
        }
    ]

    var options = {
        chart: {
            // id: "basic-bar"
            background: '#f4f4f4',
            foreColor: '#333'
        },
        xaxis: {
            categories: datatime.map(timesofday)
        },
        fill: {
            colors: ['#f44336']
        },
        plotOptions: {
            bar: {
                horizontal: horizontal
            }
        },
        dataLables: {
            enabled: false
        },
        title: {
            text: 'Daily Usage of Water',
            align: 'center',
            margin: 20,
            style: {
                fontSize: '25px'
            }
        }
    }
const onclickhandel = () =>{
    setHorizontal(!horizontal)
}

    return (
        <React.Fragment>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart chart3">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="100%"
                            height="300%"

                        />
                        <button onClick={() => {onclickhandel()}}>View</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Chart3;
