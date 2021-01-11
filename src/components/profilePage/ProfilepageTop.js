import React, { useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

const ProfilepageTop = ({ userDetail, setUserDetail }) => {
    console.log("detail",userDetail);
    const [modifyProfile, setModifyProfile] = useState(false)

    const uploadDetails = async() => {
        console.log("setFname",userDetail.fname);
        

        try {
            const data = await axios.put(" https://api.perisync.com/user/update", {
                "token": ReactSession.get("token"),
                "userid":ReactSession.get("userid"),
                "fname": userDetail.fname,
                "nickname": userDetail.nickname,
                "empno": userDetail.empno,
                "dob": userDetail.dob,
                "lname": userDetail.lname,
                "designation": userDetail.designation,
                "altemail": userDetail.altemail,
                "company": userDetail.company
                , "email": userDetail.email
                , "mobile1": userDetail.mobile1,
                "mobile2": userDetail.mobile2,
                "address2": userDetail.address2,
                "address1": userDetail.address2,
                "zip": userDetail.zip,
                "gender": userDetail.gender,
                "profile": userDetail.profile,
                "country": userDetail.country,
                "state": userDetail.state,
                "city": userDetail.state,
                "password": userDetail.password,
                "language": userDetail.language,
                "licence": userDetail.licence,
                "usertype": userDetail.usertype
            })
            console.log("updateDetails", data);
            setModifyProfile(false)
            setUserDetail(data.data)

        } catch (e) {
            console.log("fetching updation User fail", e);
        }

    }


    return (
        <div className="profilepagerighttop" >
            <Row>
                <Col className="h4">Personal Details
                </Col>

                {modifyProfile ?

                    <Col xs={2} className="mr-1">
                        <Col onClick={() => { setModifyProfile(false) }}><ImCross /></Col>
                        <Button variant="outline-light" onClick={() => uploadDetails()}><TiTick /></Button>
                    </Col> :
                    <Col xs={2} className="mr-1" onClick={() => { setModifyProfile(true) }}><BsPencil /></Col>}

            </Row>
            {modifyProfile ?
                <>
                    <Row>
                        <Col>
                            <Form.Label>Enter firstname</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setFname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setUserDetail({...userDetail,fname:e.target.value})} />
                        </Col>
                        <Col>
                            <Form.Label>Enter lastname</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.lname} className="bgclr" onChange={(e) => setLname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.lname} className="bgclr" onChange={(e) => setUserDetail({...userDetail,lname:e.target.value})} />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col>
                            <Form.Label>Enter Gender</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setGender(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setUserDetail({...userDetail,gender:e.target.value})} />
                        </Col>
                        <Col>
                            <Form.Label>Enter Date of Birth</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setDob(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setUserDetail({...userDetail,dob:e.target.value})} />
                        </Col>
                    </Row>
                </>
                :
                <>
                    <Row>
                        <Col>
                            <label>First Name:</label>
                            {userDetail.fname}
                        </Col>
                        <Col>
                            Last Name: {userDetail.lname}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Gender: {userDetail.gender}
                        </Col>
                        <Col>
                            Date of Birth: {userDetail.dob}
                        </Col>
                    </Row>
                    
                </>
            }


        </div>

    )
}

export default ProfilepageTop;