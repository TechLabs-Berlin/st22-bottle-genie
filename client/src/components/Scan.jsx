// https://javascript.plainenglish.io/capture-images-via-webcam-using-react-9282bb87de5a
import React, { useState } from 'react';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import Webcam from "react-webcam";

function Scan() {
    const [scan, setScan] = useState('');
    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    // Video constraints define the properties of the video recording that goes on before the image is captured
    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode
        // facingMode: { exact: "environment" }
    };

    const webcam = <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        height={300}
        videoConstraints={videoConstraints}
    />

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        // setScan(imageSrc)
    }, [webcamRef]);

    const handleOnClick = (e) => {
        e.preventDefault();
        setScan(webcam);
    }

    const handleRetake = (e) => {
        e.preventDefault();
        setImage('')
    }

    const handleCapture = (e) => {
        e.preventDefault();
        capture();
    }

    return (
        <div className="webcam-container">
            <div>
                {!scan && <button
                    onClick={handleOnClick}>
                    <CenterFocusWeakIcon sx={{ fontSize: "290px" }} />
                </button>}
                {scan}
            </div>
            {image !== '' ?
                <button onClick={handleRetake}
                    className="webcam-btn"
                >
                    Retake Image
                </button>
                :
                <button onClick={handleCapture}
                    className="webcam-btn"
                >
                    Capture
                </button>
            }
        </div>
    )
}

export default Scan;
