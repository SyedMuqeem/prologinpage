import React, { useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

const ProfilepageBottom = ({ userDetail, setUserDetail }) => {
    console.log("detail", userDetail);
    const [modifyProfile, setModifyProfile] = useState(false)

    const uploadDetails = async () => {
        console.log("setFname", userDetail.fname);


        try {
            const data = await axios.put(" https://api.perisync.com/user/update", {
                "token": ReactSession.get("token"),
                "userid": ReactSession.get("userid"),
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
                <Col className="h4">Details
                </Col>

                {modifyProfile ?

                    <Col xs={2} className="mr-1">
                        <Button variant="success" onClick={() => uploadDetails()}><TiTick /></Button>
                        <Button variant="outline-danger" onClick={() => { setModifyProfile(false) }}><ImCross /></Button>
                    </Col> :
                    <Button xs={2} variant="info" className="mr-5" onClick={() => { setModifyProfile(true) }}><BsPencil /></Button>}

            </Row>
            {modifyProfile ?
                <>
                    <Row className="pr-2">
                        <Col >
                            <Form.Label>Enter Address1</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setFname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.address1} className="bgclr" defaultValue={userDetail.address1} onChange={(e) => setUserDetail({ ...userDetail, address1: e.target.value })} />
                        </Col>
                        <Col>
                            <Form.Label>Enter Address2</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.lname} className="bgclr" onChange={(e) => setLname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.address2} className="bgclr" defaultValue={userDetail.address2} onChange={(e) => setUserDetail({ ...userDetail, address2: e.target.value })} />
                        </Col>
                    </Row>
                    <Row className="mb-2 pr-2">
                        <Col>
                            <Form.Label>Enter Designation</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setGender(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.designation} className="bgclr" defaultValue={userDetail.designation} onChange={(e) => setUserDetail({ ...userDetail, designation: e.target.value })} />
                        </Col>
                        <Col>
                            <Form.Label>Enter Date of Birth</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setDob(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" defaultValue={userDetail.dob} disabled  />
                        </Col>
                    </Row>
                </>
                :
                <>
                    <Row className="pr-2">
                        <Col>
                            <Form.Label>Address1</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setFname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.address1} className="bgclr1" disabled />
                        </Col>
                        <Col>
                            <Form.Label>Address2</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.lname} className="bgclr" onChange={(e) => setLname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.address2} className="bgclr1" disabled />
                        </Col>
                    </Row>
                    <Row className="mb-2 pr-2">
                        <Col>
                            <Form.Label>Designation</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setGender(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.designation} className="bgclr1" disabled />
                        </Col>
                        <Col>
                            <Form.Label>Date of Birth</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setDob(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.dob} className="bgclr1" disabled />
                        </Col>
                    </Row>

                </>
            }


        </div>

    )
}

export default ProfilepageBottom;
