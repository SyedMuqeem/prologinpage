import Axios from 'axios'
import React, { useEffect, useState } from 'react'
// redux
import { connect } from 'react-redux'
// 
import { Link, Redirect } from 'react-router-dom'
import { changeName } from '../action/changeName'
import MainDashboard from './MainDashboard'

import {ReactSession} from "react-client-session"

import myContext from "../context/Context"


// context


const Login = (props) => {
// react-client-session
ReactSession.setStoreType("localStorage");
    //states
    const [details, setDetails] = useState({
        email:"" , password:""
    })
    const [token, setToken] = useState("")
    const [fname, setFname] = useState("")
    const [userid, setUserid] = useState("")
    const [loading, setLoading] = useState("");
    const [image, setImage] = useState("");
    // context data
    const [mission, setMission] = useState({
        token: token,
        fname: "",
        userid: userid,
        image: image,
        loading:""
    })

//functions
        const login =() => {

            const FetchDetails = async () => {
                            try{
                                const data= await Axios.put("https://api.perisync.com/user/get/password",{
                                        "email" : ReactSession.get("email"),
                                        "password": ReactSession.get("password")
                                        })     
                                        console.log(data);
                                        setToken(data.data?.token);
                                        setFname(data.data?.fname);
                                        setUserid(data.data?.userid);
                                        setImage(data.data?.image?.image);
                                       
                                        setMission({...mission,loading:data.status,fname:data.data?.fname});
                                        // 
                                        ReactSession.set("fname", data.data?.fname);
                                        ReactSession.set("token", data.data?.token);
                                        ReactSession.set("userid", data.data?.userid);
                                        ReactSession.set("loading", data.data?.status);
                                        ReactSession.set("lname", data.data?.lname);
                                        ReactSession.set("email", data.data?.email);
                                        ReactSession.set("mobile", data.data?.mobile1);
                                        console.log(ReactSession.get("loading"));
                                        ReactSession.set("image", data.data?.image?.image);
                                        setLoading(data.status);
                            } catch (e){
                                console.log(e);
                                alert("wrong credentials")
                            } 
                            console.log("2",token);
                            console.log(fname);
                            console.log(userid);
                            console.log(loading);
                        }; 
                        FetchDetails();
        }

        window.onload = () => {
            login();
            };
    const [updates, setUpdates] = useState(false)


//    useEffect(() => {
//        login()
//    }, [updates])


if(loading===200)

    return <Redirect to="/history/monthView"/>

else
    return (
        <>
            
            
                <div className="sign">
                <div className="loginimage"><img src="dribbleimage.png" alt="pic" height="100%"/></div>
                <div className="loginmain">
                    <div className="loginlink">not a member<Link>Signup now</Link></div>
                    <div className="loginform">
                        <div>
                            <h3>Sign in to Dribbble</h3>
                            <div>
                            <button className="loginGoogleButton">Sign in with Google</button>
                            <button className="twitter">twi</button>
                            </div>
                            <hr className="divider"></hr>
                            <div><b>Email</b></div>
                            <input className="logintype" type="text" placeholder="joy@google.com"
                                    onChange={(e) =>(
                                        ReactSession.set("email", e.target.value),
                                        setDetails({...details,email:e.target.value}))}
                            ></input>
                            <div><b>Password</b><span className="loginforget"><Link>forget password</Link></span></div>
                            <input className="logintype" type="password" placeholder="pass"
                                onChange={(e) => 
                                    (ReactSession.set("password", e.target.value),
                                    setDetails({...details,password:e.target.value}))
                                }
                            ></input>
                            <div><button className="loginButton"
                                onClick={() => login() }
                            >Sign in</button></div>


                            {/* reducer example */}
                            <div>name:{props.myname}</div>
                            <button onClick={() => {props.changeName("muqeem")}}>change it</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default Login;
