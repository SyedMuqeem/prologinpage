import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Daycalender from './Daycalender';
import Logout from './logout/Logout';
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillCamera } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';
import ImageUploader from 'react-images-upload';
import MonthViews from './MonthViews';
import AnotherviewForTable from './AnotherviewFortable';
import Context from '../context/Context';
// react session
import { ReactSession } from "react-client-session"

const Calender = ({ token, userid, fname, image }) => {


    const [fname1, setFname1] = useState(fname)
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayDayCalender, setDisplayDayCalender] = useState(true)

    // const displaydaybutton = () => {

    //     const fetch = () => {
    //         setDisplayDayCalender(!displayDayCalender)
    //     }
    //         fetch();


    // }


    const getPlayerData = async () => {
        console.log(token);
        console.log(userid);
        // console.log("image-----",image);s
        try {
            const data = await axios.put(
                " https://api.perisync.com/admin/history/tenants", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            }
            );
            console.log("getPlayerData", data);
            setPlayers(data.data);
            setLoading(true)
        } catch (e) {
            console.log("muqeem", e);
        }

    }

    const column = [
        { dataField: "tenantID", text: "Name or ID" },
        { dataField: "dec", text: "december consuption" },
        // { dataField: "sd", text:"Index"}
    ]

    useEffect(() => { getPlayerData() }, []);



    // const Example = () => <img src={`data:image/jpeg;base64,${image}`} />
    // const [urlimage] = useState(<img className="profilecicrle" src={`data:image/jpeg;base64,${image}`} />)

    //calender
    const [monthlyData, setMonthlyData] = useState([]);
    const getmonthlyData = async () => {
        console.log(token);
        console.log("calender userid", userid);
        try {
            const data = await axios.put(
                " https://api.perisync.com/admin/history/tenants", {
                "token": token,
                "userid": userid
            }
            );
            console.log("monthly", data.data);
            setMonthlyData(data.data);
        } catch (e) {
            console.log("muqeem", e);
        }

    }
    useEffect(() => { getmonthlyData() }, []);

    const renderdecdata = (monthlyData, index) => {
        return (


            <div className="samplecomponent">id {monthlyData.tenantID}<hr />
                <br />jan:-  {monthlyData.jan} liters
                <br />feb:-  {monthlyData.feb} liters
                <br />mar:-  {monthlyData.mar} liters
                <br />apr:-  {monthlyData.apr} liters
                <br />may:-  {monthlyData.may} liters
                <br />jun:-  {monthlyData.jun} liters
                <br />jul:-  {monthlyData.jul} liters
                <br />aug:-  {monthlyData.aug} liters
                <br />sep:-  {monthlyData.sep} liters
                <br />oct:-  {monthlyData.oct} liters
                <br />nov:-  {monthlyData.nov} liters
                <br />dec:-  {monthlyData.dec} liters
            </div>

        )
    }
    const renderjandata = (monthlyData, index) => {
        return (


            <div className="samplecomponent">jan<hr />id {monthlyData.tenantID}<br />water consumed<br />{monthlyData.jan}liters </div>

        )
    }

    const [logoutPic, setLogoutPic] = useState(false)
    const [updatePic, setUpdatePic] = useState(false)
    const [profilepicclicked, setProfilepicclicked] = useState(false)


    const [picName, setPicName] = useState([]);
    const [picupdatebutton, setPicupdatebutton] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [displayUpdatebutton, setDisplayUpdatebutton] = useState(false);






    const uploadImageToServer = async () => {

        console.log("picname", picName);
        console.log("userid", ReactSession.get("userid"));
        console.log("token", ReactSession.get("token"));

        let formData = new FormData();
        formData.append('snapshot', picName);
        formData.append('userid', ReactSession.get("userid"));
        formData.append('token', ReactSession.get("token"));

        try {
            const data = await axios.post(
                " https://api.perisync.com/user/store/img",
                formData,
                // {
                //         headers: {
                //         "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                //         "Content-type": "multipart/form-data",
                // },
                //     }
            )
            // .dispatch({
            //     type: "UPLOADIMAGE",
            //     payload: {
            //        formData,
            //        data
            //     }
            //  });
            setUploaded(true)
            console.log("uploadpic sucessful in db", data);
        } catch (e) {
            console.log("uploadpic fail", e);
        }
    }


    // const uploadImageToServer = async () => {

    //     console.log("picname", picName);
    //     console.log("userid", userid);
    //     console.log("token", token);


    //     let formData = new FormData();
    //     formData.append('token', token);
    //     formData.append('userid', userid);
    //     // formData.append('email', "buildingadmin@baigresidency.com");

    //     formData.append('snapshot', picName);


    //     // {console.log("picname in formdata:--",formData)}

    //     const dispatch=() => {
    //        axios.post(" http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/store/img",
    //           formData,
    //           {
    //              headers: {
    //                 "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
    //                 "Content-type": "multipart/form-data",
    //              },
    //           }
    //        ).then(res => {
    //           console.log(`Success` + res);
    //           dispatch({
    //              type: "UPLOADIMAGE",
    //              payload: {
    //                 formData,
    //                 res
    //              }
    //           });
    //        }).catch((err) => {
    //           dispatch({
    //              type: "UPLOADIMAGE_FAILED",
    //              msg: err
    //           })
    //        })
    //     }
    //     dispatch();
    //  }










    return (
        <div className="calendermain" >
            <div className="calender1">
                <div><h2>Attendance calender </h2></div>
            </div>
            <div className="calender2">
                <div className="profilecard" >
                    <img className="profilecicrle" src={`data:image/jpeg;base64,${ReactSession.get("image")}`}
                        onClick={() => { setProfilepicclicked(true) }}
                        alt="pic" width="100%"
                    />
                    <div className="username">Name: {ReactSession.get("fname")}</div>
                </div>

                {/* (src=`${picName}`) : (src=`data:image/jpeg;base64,${image}` )  */}

                <div className="profileupdate" style={{ display: profilepicclicked ? "block" : "none" }}>
                    <div className="profileupdate1">
                        <img className="profilecicrle" src={`data:image/jpeg;base64,${ReactSession.get("image")}`} alt="pic" width="100%" />

                    </div>
                    <div className="camera" onClick={() => {
                        setUpdatePic(true)
                    }}>
                        <AiFillCamera />
                    </div>
                    <div className="profileupdate2"><b>{fname1}</b></div>

                    <div className="profileupdate2"
                        onClick={() => { setProfilepicclicked(false); setUpdatePic(false); setUploaded(false); setDisplayUpdatebutton(false) }}
                    ><IoExitOutline /></div>


                    <div className="profileupdate2">
                        {picupdatebutton ? (
                            <button onClick={() => uploadImageToServer()}>updateprofile</button>
                        ) : ("")}
                    </div>

                    {/* <Link><div className="profileupdate2"><BsPersonFill/>Profile</div></Link> */}
                    <div className="profileupdate4"></div>


                    {/* onscreen formdata */}
                    <div><input type="file" name="file"
                        onChange={(e) => { setPicName(e.target.files[0]) },() => {setDisplayUpdatebutton(true)}}
                    /></div>
                    {displayUpdatebutton ? <button onClick={() => { uploadImageToServer() }}>click here to update</button> : (null)}

                    <div style={{ color: 'white' }}>{uploaded ? "Uploaded Successfully" : null}</div>



                    {/* <ImageUploader style={{display:updatePic? "block" : "none"}}
                                withIcon={true}
                                buttonText='Choose images'
                                onChange={(e)=>{setPicName(picName.concat(e))
                                                setPicupdatebutton(true)
                                    }}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                             */}

                </div>



                <div className="completerow">
                    <div className="tooglerow">
                        <div>Current Session</div>
                        <div className="toogle">
                            <div className="tooglecircle"></div>
                        </div>
                        <div><b>0hrs 00min</b></div>
                        <div className="outsidework">Outside working Hours</div>
                    </div>
                    <div className="workhours">
                        <div className="totalworktime"><b>12h 30m</b><div className="totalwork">Total work</div></div>
                        <div className="totalworktime"><b>5h 15m</b><div className="totalwork">Productive</div></div>
                        <div className="totalworktime"><b>3h 15m</b><div className="totalwork">Natural</div></div>
                        <div className="totalworktime"><b>5h 0m</b><div className="totalwork">Unproductive</div></div>
                    </div>
                    <div className="graphrow">
                        <div className="graphcolor1"></div>
                        <div className="graphcolor2"></div>
                        <div className="graphcolor3"></div>
                        <div className="graphcolor4"></div>
                        <div className="graphcolor5"></div>
                        <div className="graphcolor6"></div>
                        <div className="graphcolor7"></div>
                        <div className="graphcolor8"></div>
                    </div>
                    <div className="graphrow1">
                        <div className="graphtime">08.00</div>
                        <div className="graphtime">09.00</div>
                        <div className="graphtime">10.00</div>
                        <div className="graphtime">11.00</div>
                        <div className="graphtime">12.00</div>
                        <div className="graphtime">01.00</div>
                        <div className="graphtime">02.00</div>
                        <div className="graphtime">03.00</div>
                        <div className="graphtime">04.00</div>
                        <div className="graphtime">05.00</div>
                        <div className="graphtime">06.00</div>
                        <div className="graphtime">07.00</div>
                    </div>
                </div>
            </div>
            <div className="calender3"><b>Task List</b></div>
            <div className="calender4 calender3">
                hi
            </div>
            <div className="calender5">
                <div>
                    <button onClick={() => (setDisplayDayCalender(true))}>day </button>
                    <button onClick={() => (setDisplayDayCalender(false))}>month</button>
                </div>
                <div><b>Recent Screenshot / video</b> </div>
                {/* <div>day {displayDayCalender ? ("true") : ("false")}</div> */}

                {displayDayCalender ? (
                    <Daycalender token={token} userid={userid} fname={fname} image={image} />
                ) : (

                        <MonthViews token={ReactSession.get("token")} userid={ReactSession.get("userid")} />



                        // <AnotherviewForTable/>
                        // <>

                        //             <div className="calenderdates">

                        //                 {monthlyData.map(renderdecdata)}
                        //             </div>
                        // </>
                    )}

            </div>
        </div>
    )
}

export default Calender;
