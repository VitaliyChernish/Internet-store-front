import React from "react";
import s from './ledLights.module.scss';
import vidos from './statik/vidos.mp4'
import VideoPlayer from "./videoPlayer/VideoPlayer";

const LedLights3 = () => {

   

    return (
        <div className={s.content3Main} >
            <VideoPlayer videoForPlay={vidos} />
        </div>
    )
}

export default LedLights3