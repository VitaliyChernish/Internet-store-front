import React, { useEffect, useState } from "react";
import s from './cameraContent.module.scss';
import vidos from './statik/vidos.mp4'
import videojs from "video.js";
import VideoPlayer from "./videoPlayer/VideoPlayer";

const CameraContent3 = () => {

   

    return (
        <div className={s.content3Main} >
            <VideoPlayer videoForPlay={vidos} />
            {/* <div id="myVideo" className={`${s.videoJS} ${s.vjsPaused} ${s.paused}`} style={{ width: window.innerWidth }} >
                <video className={`${s.vjs} ${s.tech}`} tabIndex="-1" role="application"
                    src={vidos} type="video/mp4" >
                </video>
            </div> */}
        </div>
    )
}

export default CameraContent3