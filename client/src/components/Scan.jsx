// https://javascript.plainenglish.io/capture-images-via-webcam-using-react-9282bb87de5a
import React, { Component, useState } from 'react';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import Webcam from "react-webcam";

function Scan() {
    const [scan, setScan] = useState(null);
    // const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    // Video constraints define the properties of the video recording that goes on before the image is captured
    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
    };


    const webcam = <Webcam
        audio={false}
        ref={webcamRef}
        // ScreenshotFormat returns a base64 encoded string of the current webcam image
        screenshotFormat="image/jpeg"
        width={300} height={300}
        videoConstraints={videoConstraints}
    />

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
    }, [webcamRef]);

    const handleOnClick = (e) => {
        e.preventDefault();
        setScan(webcam);

    }

    return (
        <div className="webcam-container">
            <div>
                {!scan && <button
                    onClick={handleOnClick}>
                    <CenterFocusWeakIcon sx={{ fontSize: "300px" }} />
                </button>}
                {scan}
            </div>
        </div>
    )
}

export default Scan;
