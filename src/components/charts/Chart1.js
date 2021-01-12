import React, { useEffect, useState } from 'react'




import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { ReactSession } from 'react-client-session';
import axios from 'axios';
import TimeStamp from 'react-timestamp'
import moment from "moment"

// Resolves charts dependancy
charts(FusionCharts);




const Chart1 = () => {
// const [label, setLable]=useState([])
// const [values, setValues]=useState([])

// const label=[1,2];
// const values=["hoem","my"];


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
      console.log("api chart1",data.data);

      // setLable(data.data?.values)
      // label=data.data?.values
      // setValues(data.data?.x_axis_start)
      // values=data?.x_axis_start
      // setData([data.data?.values,data.data?.x_axis_start])
      setData(data.data?.values)
      setDatatime(data.data?.x_axis_start);

      console.log("apidata",data);


    } catch (e) {
      console.log("muqeem", e);
    }

  }


  useEffect(() => { console.log("datalength",data.length-1)}, [data])
  useEffect(() => { getChartData() }, [])

  var d = new Date();
  // for liter consuption
  const datamapping = (data,index) => {
    return (
      {
        // label: `${datatime === 5 ? moment(new Date()).format('dddd') : ("")}` ,
        label: moment(datatime[index]).format('dddd') ,
        value: data
      }
    )
  }
// for values
  // const timemapping = ( datatime) => {
  //   return (
      
  //      { lable: datatime }
      
  //   )
  // }


  const dataSource = {
    chart: {
      caption: "DAILY DATA",
      yaxisname: "Liters",
      xaxisname: "Daily Usage of Water",
      numbersuffix: "l",
      theme: "candy"
    },
    data: data.map(datamapping)
  };

  // console.log(data.map(datamapping));

  return (
    <ReactFusioncharts
      type="column3d"
      width="89%"
      height="100%"
      dataFormat="JSON"
      dataSource={dataSource}
    />

  )
}

export default Chart1;
