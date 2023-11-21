import React from "react";
import s from './ledLights.module.scss';
import ledLight2 from './statik/ledLight/ledLigntMain2.png'
import ledLight3 from './statik/ledLight/ledLigntMain3.png'
import ledLight4 from './statik/ledLight/ledLight4.jpeg'

const listItemArr = [
    { image: ledLight2, positionText: 0, positionImg: 0, styleName: '', marker: 'Ви отримуєте:', content: `Якісні LED-лампочки, що створюють неповторний м'який світловий ефект, який доповнює атмосферу затишку та радості в вашій оселі. Ваші гості будуть в захваті!` },
    { image: ledLight3, positionText: '-40%', positionImg: '50%', styleName: s.imageSituation1, marker: 'Легке використання', content: `Просто розгорніть гірлянду, підключіть до джерела живлення, і ви отримаєте вражаючий світловий акцент в своєму будинку.` },
    { image: ledLight4, positionText: 0, positionImg: 0, styleName: s.imageSituation1, marker: 'Більше магії', content: `Чарівного ефекту додають 8 режимів миготіння світлодіодів, які світять теплим білим кольором з м'яким жовтим відтінком!` },
]


const LedLights4 = () => {

    return (
        <div className={s.content4Main} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} >
            <div className={s.listItems} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} >
                <div className={s.arrMap}>
                    {listItemArr.map((el, i) => {
                        return (
                            <>
                                <span className={s.marker}>{el.marker.toUpperCase()}</span>
                                <div key={i} className={s.listItem}>
                                    <div className={s.backgroundForImage}></div>
                                    <img className={s.imageStyle} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} src={el.image} alt="" />
                                    <div className={s.descrContainer}>

                                        <span className={s.context}>{el.content}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default LedLights4;