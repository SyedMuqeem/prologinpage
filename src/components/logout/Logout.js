import React from 'react'
import { Link, Redirect } from 'react-router-dom'
// react session
import { ReactSession } from "react-client-session"


const Logout = ({ fname, image }) => {


  return (<div className="zindexlogout">
    {/* <div> <img className="profilecicrle2" src={`data:image/jpeg;base64,${image}`}  alt="pic" width="100%"/></div> */}
    <div>{fname}</div>
    <div><Link to="/profile">Profile</Link> </div>
    <div className="smalllogout1">
     <Link to="/"><button
        onClick={() =>(localStorage.clear())}
        className="smalllogout">logout
                               </button></Link> 

    </div>

  </div>
  )
}

export default Logout;
