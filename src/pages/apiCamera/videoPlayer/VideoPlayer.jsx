import React from "react";
import './style.scss'
import prepre from '../statik/mainCameraPicture.webp'

const VideoPlayer = ({ videoForPlay }) => {

    return (
        <>
            <video
                width={window.innerWidth <= 599 ? window.innerWidth : 600}
                height={window.innerWidth <= 599 ? window.innerWidth * 0.9433 : 566}
                controls
                preload={prepre}
                poster={prepre}
                playsInline="playsinline"
            >
                <source src={videoForPlay} type="video/mp4" />
            </video>
        </>
    )
}

export default VideoPlayer;