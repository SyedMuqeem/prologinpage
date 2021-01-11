// import logo from './logo.svg';
// import Mqtts from './mqtt/Mqtts';
import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import Sidenav from '../Sidenav';
import { ReactSession } from 'react-client-session';
import moment from 'moment';


//States







function ConnectMqtt() {


    const [client, setClient] = useState(null);
    const [connectStatus, setConnectStatus] = useState(null);
    const [payload, setPayload] = useState("on");
    const [topicFromMqtt, setTopicFromMqtt] = useState([moment(new Date()).format('LT')]);
    const [message, setMessage] = useState("on");
    const [checkmessage, setCheckmessage] = useState([30]);
    const [messagesStatus, setMessagesStatus] = useState(true)

    var clientId = 'MuqeemMQtt' + Math.random().toString(16).substr(2, 8);
    // var host = 'wss://15.206.51.182:15676/ws'
    var host = 'ws://18.223.169.112:15675/ws'
    var options = {
        keepalive: 60 * 1000,
        clientId: clientId,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        will: {
            topic: 'WillMsg101',
            payload: 'Connection Closed abnormally..!',
            qos: 0,
            retain: false
        },
        username: 'nazim',
        password: 'nazim',
        rejectUnauthorized: false
    }



    const mqttConnect = (host, options) => {
        setConnectStatus('Connecting');
        setClient(mqtt.connect(host, options));
    };
    useEffect(() => { mqttConnect(host, options) }, [])

    useEffect(() => {
        if (client) {
            console.log(client)
            client.on('connect', () => {
                setConnectStatus('Connected');
                client.subscribe('post111')
            });
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
            client.on('reconnect', () => {
                setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
                const payload = { topic, message: message.toString() };
                setPayload(payload.message);
                // console.log("message", message);
            });
        }
    }, [client]);


    useEffect(() => {
        console.log("message recieved", payload);
    }, [payload]);







    const onclick = () => {
        // setMessagesStatus(!messagesStatus)
        if (payload === "on") {
            client.publish('post111',"Off")
        }
        else {
            client.publish('post111', 'on')
        }
    }



    return (
        <> {console.log("connection:----", connectStatus)}
            {console.log("connection:----", message)}
            <Sidenav token={ReactSession.get("token")} userid={ReactSession.get("userid")} fname={ReactSession.get("fname")} image={ReactSession.get("image")} />
            <div className="mqttcomponent">
                <button className="muqttbutton"
                    style={messagesStatus ? ({ color: "green" }) : ({ color: "rgb(133, 51, 51)" })}
                    onClick={() => (onclick())}
                >
                    <h1>lights {payload}</h1>
                </button>
                <hr />
                <h1>mqtt data</h1>
                <h2>published: {payload}</h2>
            </div>

        </>
    );
}

export default ConnectMqtt;
