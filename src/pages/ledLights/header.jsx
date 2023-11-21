import React from "react";
import s from './ledLights.module.scss';
import cristmassBalls from './statik/ledLight/cristmassBalls.png'
import powerIcon from './statik/img19.png'

const HeaderMain = () => {
    // const header = 'Краща в своєму класі'
    const header = 'Хіт Нового року'
    const descr = [``]
    return (
        <header style={{ width: window.innerWidth }} className={s.headerMain}>
            <div className={s.headerAndPrice}>

                <div className={s.headdd}>
                    <div className={s.header}>{header.toUpperCase()}</div>
                    <div className={s.battery}>
                        {/* <img className={s.power} src={powerIcon} alt="" /> */}
                        <img className={s.batteryCase} src={cristmassBalls} alt="" />
                    </div>
                    {/* {descr.map((el, i) => {
                        return (
                            <span key={i}>{el.toLocaleUpperCase()}</span>
                        )
                    })} */}
                </div>
            </div>
        </header>
    )
}

export default HeaderMain