import React from "react";
import s from './cameraContent.module.scss';

const HeaderMain = () => {
    // const header = 'Краща в своєму класі'
    const header = ''
    const descr = [`спостереження`, `захист`, `зв'язок`]
    return (
        <header style={{ width: window.innerWidth }} className={s.headerMain}>
            <div className={s.headerAndPrice}>
                <span className={s.header}>{header.toUpperCase()}</span>
                <div className={s.headdd}>
                    {descr.map((el, i) => {
                        return (
                            <span key={i}>{el.toLocaleUpperCase()}</span>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default HeaderMain