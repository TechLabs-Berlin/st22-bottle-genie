import React from "react";
import Webcam from "react-webcam";

function Scan() {

    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
    };
    const webcamRef = React.useRef(null);

    return(
        <div>
            <Webcam
                audio={false}
                // height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                // width={220}
                videoConstraints={videoConstraints}
            />
        </div>
    )
}

export default Scan;

// import React, { Component, useState } from 'react';
// // import './cameraStyles.css'
// import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;
// const videoConstraints = {
//     width: 220,
//     height: 200,
//     facingMode: "user"
// };

// function WebcamCapture () {
//     const webcamRef = React.useRef(null);

//     const capture = React.useCallback(
//         () => {
//             const imageSrc = webcamRef.current.getScreenshot();
//         },
//         [webcamRef]
//     );

//     const handleOnClick = (e) => {
//         e.preventDefault();
//         capture();
//     }

//     return (
//         <div className="webcam-container">
//             <Webcam
//                 audio={false}
//                 height={200}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 width={220}
//                 videoConstraints={videoConstraints}
//             />
//             <button
//                 onClick={handleOnClick}>
//                 Capture
//             </button>
//         </div>
//     );
// };

// export default WebcamCapture;
