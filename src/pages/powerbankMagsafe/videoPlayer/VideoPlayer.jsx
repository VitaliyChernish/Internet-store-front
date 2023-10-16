import React from "react";
import './style.scss'
import prepre from '../statik/sticker.jpg'
import prepre2 from '../statik/sticker2.jpg'

const VideoPlayer = ({ videoForPlay }) => {

    return (
        <>
            <video
                width={window.innerWidth <= 599 ? window.innerWidth : 600}
                height={window.innerWidth <= 599 ? window.innerWidth * 1.335 : 600 * 1.335}
                controls
                preload={window.innerWidth <= 599 ? prepre2 : prepre}
                poster={window.innerWidth <= 599 ? prepre2 : prepre}
                playsInline="playsinline"
            >
                <source src={videoForPlay} type="video/mp4" />
            </video>
        </>
    )
}

export default VideoPlayer;