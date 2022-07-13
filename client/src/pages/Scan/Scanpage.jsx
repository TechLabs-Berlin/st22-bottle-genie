// https://javascript.plainenglish.io/capture-images-via-webcam-using-react-9282bb87de5a
import React, { Component, useState } from 'react';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import Webcam from "react-webcam";
import Scan from '../../components/Scan';

// const WebcamComponent = () => <Webcam />;


function Scanpage () {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    const handleOnClick = (e) => {
        e.preventDefault();
        <Scan/>
    }

    return (
        <div className="container-fluid" id="main-container">
             <h3 id="heading">SCAN YOUR BOTTLE</h3>
            <hr />
        {/* <div className="webcam-container"> */}
        <div>
            <button
                onClick={handleOnClick}>
                <CenterFocusWeakIcon sx={{ fontSize: "320px" }} />
            </button>
            <hr />
            </div>
        {/* </div> */}
        </div>
    );
};

export default Scanpage;
