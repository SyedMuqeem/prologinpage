import React, { useEffect, useState } from 'react'
import { ReactSession } from "react-client-session"
import { AiFillCamera } from 'react-icons/ai';
import axios from 'axios';
import ProfilepageTop from '../components/profilePage/ProfilepageTop';
import ProfilePageMiddle from '../components/profilePage/ProfilePageMiddle';
import ProfilepageBottom from '../components/profilePage/ProfilePageBottom';

const ProfilePage = () => {





    const [inputType, SetInputType] = useState(false)
    const [picName, setPicName] = useState([]);
    const [displayUpdatebutton, setDisplayUpdatebutton] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [image, setImage] = useState(ReactSession.get("image"))


    const uploadImageToServer = async () => {

        console.log("picname", picName);
        console.log("userid", ReactSession.get("userid"));
        console.log("token", ReactSession.get("token"));

        let formData = new FormData();
        formData.append('snapshot', picName);
        formData.append('userid', ReactSession.get("userid"));
        formData.append('token', ReactSession.get("token"));
        // upadate image to server
        try {
            console.log(picName);
            const data = await axios.post(
                " https://api.perisync.com/user/store/img",
                formData,
            )

            setUploaded(true)
            console.log("uploadpic sucessful in db", data);
            SetInputType(false)
            setDisplayUpdatebutton(false)
            setImage(data.data?.imgData)
        } catch (e) {
            console.log("uploadpic fail", e);
        }
    }
    const cameraOn = () => {
        SetInputType(!inputType)
        setUploaded(false)
    }

    const [userDetail, setUserDetail] = useState([])
    const getUserDetails = async () => {
        console.log(ReactSession.get("email"));
        console.log(ReactSession.get("token"));
        console.log(ReactSession.get("userid"));
        try {
            const data = await axios.put(" https://api.perisync.com/user/get/one", {
                "email": ReactSession.get("email"),
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid")
            })
            console.log("userProfil", data.data);
            setUserDetail(data.data);
            console.log(data.data?.fname);
            console.log(userDetail.fname);

        } catch (e) {
            console.log("fetching User fail", e);
        }

    }

    useEffect(() => {

        getUserDetails();

    }, [])



    return (
        <div className="profilepage">
            <div className="profilepageleft">
                <div className="profilepagelefttop">
                    <div><img className="profilecicrle3" src={`data:image/jpeg;base64,${image}`} />
                        <div><div className="smallcircle" onClick={() => cameraOn()} ><AiFillCamera />
                        </div>
                            <div>

                                {inputType ? (<div><input type="file" name="file"
                                    onChange={(e) => { setPicName(e.target.files[0]) }}
                                ></input>
                                    <button onClick={() => { uploadImageToServer() }}>click here to update</button></div>) : (null)}


                            </div>
                            <div style={{ color: 'white' }}>{uploaded ? "Uploaded Successfully" : null}</div>
                        </div>

                    </div>


                    <h1 style={{ color: 'white' }}>{userDetail.fname} {userDetail.lname}</h1>
                    <h1>{ReactSession.get("mobile1")}</h1>
                </div>
                <div className="profilepageleftbottom">
                    <h3  >Phone Number:  <span style={{ color: 'white' }} >{ReactSession.get("mobile")}</span></h3>
                    <h5 >Email:  <span style={{ color: 'white' }}>{ReactSession.get("email")}</span></h5>
                </div>
            </div>
            <div className="profilepageright">
                <ProfilepageTop userDetail={userDetail} setUserDetail={setUserDetail}/>
                <ProfilePageMiddle userDetail={userDetail} setUserDetail={setUserDetail}/>
                <ProfilepageBottom userDetail={userDetail} setUserDetail={setUserDetail}/>

            </div>

        </div>
    )
}

export default ProfilePage
