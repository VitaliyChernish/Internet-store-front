import React from "react";
import s from './cameraContent.module.scss';
import vidos from './statik/vidos2.MP4'
import VideoPlayer from "./videoPlayer/VideoPlayer";

const CameraContent3 = () => {

   

    return (
        <div className={s.content3Main} >
            <VideoPlayer videoForPlay={vidos} />
        </div>
    )
}

export default CameraContent3