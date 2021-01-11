import React from "react";
import {Table} from 'react-bootstrap';

const AnotherviewForTable =() => {

    const players =[
        {position: "Forward", name:"Lebron", team:"Lakers"},
        {position: "Guard", name:"Russel Westbreaker", team:"Rockets"},
        {position: "Guard", name:"James Lebron", team:"Rockers"},
        {position: "Forward", name:"Luca Donick", team:"Mavricks"}
    ];

    const renderPlayer = (players, index) => {
        return(
            <tr key={index}>
                <td>{players.name}</td>
                <td>{players.position}</td>
                <td>{players.team}</td>
            </tr>
        )
    }

    return(
    <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(renderPlayer)}
                    
                </tbody>
            </Table>
           
    </div>
    );
}
export default AnotherviewForTable;