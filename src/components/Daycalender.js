import React, { useEffect, useState } from 'react'

import  FullCalendar  from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import moment from 'moment'


const Daycalender = (token,userid,fname,image) => {




                    const [date, setDate] = useState(new Date());
                    const onChange = date => {
                        setDate(date)
                    }

                    const [monthlyData, setMonthlyData] = useState([]);
                    const [time, setTime] = useState([]);
                    const [liter, setLiter] = useState([]);



                const getmonthlyData = async () => {
                    console.log("daycal token",token.token);
                    console.log("daycal userid",userid);
                    try{
                        const data = await axios.put(
                            "  https://api.perisync.com/admin/history/month",{
                                "token" : token.token,
                                "userid": token.userid
                                }
                        );
                        console.log("mmmm11",data.data?.events);
                        setMonthlyData(data.data?.events);
                        setTime(data.data?.events?.[0].start);
                        setLiter(data.data?.events?.[0].title);
                    } catch (e){
                        console.log("muqeem1",e);
                    }
                    
                }
                useEffect(() => {getmonthlyData()},[]);
                useEffect(() => {console.log("actual",monthlyData)},[liter]);

                const dateToFormat = new Date('2020-12-19T12:59-0500');

                const eventss = (monthlyData, index) => {
                    return(
                        {title: monthlyData.title, date: moment(monthlyData.start).format('YYYY-MM-DD')}

                        // `{title: ${ monthlyData.title},date:${moment(monthlyData.start).format('YYYY-MM-DD')} }`
                        
                            // monthlyData.title,
                            // moment(monthlyData.start).format("YYYY-MM-DD")
                        
                    )
                }
            

    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"


                
                 events = {[


                    // (monthlyData.map(eventss))
                    // {title: 'event 1', date: <Moment format="YYYY-MM-DD"> {time}</Moment>},
                //     {title: liter, date: moment(time).format("YYYY-MM-DD")},
                    {title: "event 14", date: '2020-12-06'},
                    // {title: 'event 01', date: "2020-12-16"},
                    // {title: 'event 02', date: "2020-12-19"},
                ]}
            />
            {console.log("rizwan11",monthlyData.map(eventss))}
        </div>
    )
}

export default Daycalender;
