import React, { useEffect, useState } from 'react'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import moment from "moment"



const Chart4 = () => {


    const [data, setData] = useState([])
    const [datatime, setDatatime] = useState([])
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
        return `${moment(datatime).format('dddd')}`
    }


    var series = data;

    var options = 
     {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: datatime.map(timesofday),
        theme: {
          monochrome: {
            enabled: false  
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        title: {
          text: "Monochrome Pie"
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        },
        legend: {
          show: false
        }
      }
    
    
    

    

    return (
        <React.Fragment>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart chart3">
                        <Chart
                            options={options}
                            series={series}
                            type="pie"
                            width="50%"

                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Chart4;
