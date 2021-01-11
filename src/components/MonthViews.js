import axios from "axios";
import React, { useEffect, useState } from "react";



import {Table} from 'react-bootstrap';



import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import { ReactSession } from "react-client-session"



const MonthViews = ({ userid,token}) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const getPlayerData = async () => {
        console.log(token);
        console.log(userid);
        try{
            const data = await axios.put(
                "  https://api.perisync.com/admin/history/tenants",{
                    "token": ReactSession.get("token"),
                    "userid": ReactSession.get("userid")
                    }
            );
            console.logReactSession.get("token")();
            console.log(data);
            setPlayers(data.events);
            setLoading(true)
        } catch (e){
            console.log("muqeem",e);
        }
        
    }

    const renderPlayer = (players, index) => {
        return(
            <tr key={index}>
                <td>{players.tenantID}</td>
                <td>{players.jan}</td>
                <td>{players.feb}</td>
                <td>{players.mar}</td>
                <td>{players.apr}</td>
                <td>{players.may}</td>
                <td>{players.jun}</td>
                <td>{players.jul}</td>
                <td>{players.aug}</td>
                <td>{players.sep}</td>
                <td>{players.oct}</td>
                <td>{players.nov}</td>
                <td>{players.dec}</td>
            </tr>
        )
    }

    // const column = [
    //     { dataField: "tenantID", text: "Name or ID"},
    //     { dataField: "jan", text: "Jan consuption"},
    //     { dataField: "feb", text: "Feb consuption"},
    //     { dataField: "mar", text: "Mar consuption"},
    //     { dataField: "apr", text: "Apr consuption"},
    //     { dataField: "may", text: "May consuption"},
    //     { dataField: "jun", text: "Jun consuption"},
    //     { dataField: "jul", text: "Jul consuption"},
    //     { dataField: "aug", text: "Aug consuption"},
    //     { dataField: "sep", text: "Sep consuption"},
    //     { dataField: "oct", text: "Oct consuption"},
    //     { dataField: "nov", text: "Nov consuption"},
    //     { dataField: "dec", text: "Dec consuption"},
    //     // { dataField: "sd", text:"Index"}
    // ]

    useEffect(() => {getPlayerData()},[]);

    return(



        <div className="overlap">
            <Table  striped bordered hover>
                <thead>
                    <tr>
                    <th>TENANT ID</th>
                    <th>JAN</th>
                    <th>FEB</th>
                    <th>MAR</th>
                    <th>APR</th>
                    <th>MAY</th>
                    <th>JUN</th>
                    <th>JUL</th>
                    <th>AUG</th>
                    <th>SEP</th>
                    <th>OCT</th>
                    <th>NOV</th>
                    <th>DEC</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(renderPlayer)}
                    
                </tbody>
        </Table>


        </div>











        // <div className="dashboard2 monthly">
        //     {loading ? (
        //         <BootstrapTable 
        //         keyField="name"
        //         data={players}
        //         columns={column}
        //         // pagination={paginationFactory()}    
        //     />) :(
        //         <div className="spinner"><ReactBootStrap.Spinner animation="border"/></div>
        //     )}
            
        // </div>
    )
}

export default MonthViews;