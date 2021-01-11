import React, { useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { Col, Container, Row, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

const ProfilePageMiddle = ({ userDetail, setUserDetail }) => {
    console.log("detail", userDetail);
    const [modifyProfile, setModifyProfile] = useState(false)

    const uploadDetails = async () => {


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
                <Col className="h4">Contact Details
                </Col>

                {modifyProfile ?

                    <Col xs={2} className="mr-1">
                        <Button variant="success" onClick={() => uploadDetails()}><TiTick /></Button>
                        <Button variant="outline-danger" onClick={() => { setModifyProfile(false) }}><ImCross /></Button>
                    </Col> :
                    <Button variant="info" className="mr-5" onClick={() => { setModifyProfile(true) }}><BsPencil /></Button>}

            </Row>
            {modifyProfile ?
                <>
                    <Row className="pr-2">
                        <Col>
                            <Form.Label>Mobile number</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setFname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.mobile1} className="bgclr" disabled />
                        </Col>

                    </Row>
                    <Row className="mb-2 pr-2">
                        <Col>
                            <Form.Label>Email</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setGender(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.email} className="bgclr" disabled />
                        </Col>
                        <Col>
                            <Form.Label>Enter Company</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setDob(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.company} className="bgclr" defaultValue={userDetail.company} onChange={(e) => setUserDetail({ ...userDetail, company: e.target.value })} />
                        </Col>
                    </Row>
                </>
                :
                <>
                    <Row className="pr-2">
                        <Col>
                            <Form.Label>Mobile number</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.fname} className="bgclr" onChange={(e) => setFname(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.mobile1} className="bgclr" disabled />
                        </Col>

                    </Row>
                    <Row className="mb-2 pr-2">
                        <Col>
                            <Form.Label>Email</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.gender} className="bgclr" onChange={(e) => setGender(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.email} className="bgclr" disabled />
                        </Col>
                        <Col>
                            <Form.Label>Company</Form.Label>
                            {/* <Form.Control type="text" placeholder={userDetail.dob} className="bgclr" onChange={(e) => setDob(e.target.value)} /> */}
                            <Form.Control type="text" placeholder={userDetail.company} className="bgclr" disabled />
                        </Col>
                    </Row>


                </>
            }


        </div>

    )
}

export default ProfilePageMiddle;



