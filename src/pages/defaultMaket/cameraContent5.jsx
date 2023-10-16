import React, { useEffect, useState } from "react";
import s from './cameraContent.module.scss';

const allAttributes = [
    { id: 1, headerStyle: s.headerStyle, name: 'Основні атрибути', value: '' },
    { id: 2, name: 'Країна виробник', value: 'Китай' },
    { id: 3, name: 'Тип камери', value: 'IP' },
    { id: 4, name: 'Форм-фактор', value: 'Міні' },
    { id: 5, name: 'Застосування', value: 'Внутрішня' },
    { id: 6, name: 'Роздільна здатність (Мп)', value: '5' },
    { id: 7, name: 'Формат стиснення', value: 'MJPEG, H. 264' },
    { id: 8, name: 'Зображення картинки', value: 'Кольорова' },
    { id: 9, name: 'Режим зйомки "День/ніч"', value: 'Так' },
    { id: 10, name: 'Перемикання режимів "День/ніч"', value: 'Програмне' },
    { id: 11, name: 'Наявність ІЧ-підсвічування', value: 'Так' },
    { id: 12, name: 'Стан', value: 'Новий' },
    { id: 13, name: 'Датчик руху', value: 'Так' },
    { id: 14, name: 'Наявність LED-підсвічування', value: 'Ні' },
    { id: 15, headerStyle: s.headerStyle, name: 'Матриця', value: '' },
    { id: 16, name: 'Роздільна здатність матриці', value: '1280x720' },
    { id: 17, name: 'Кількість мегапікселів', value: '5 Мп' },
    { id: 18, name: 'ІЧ-фільтр, що відключається', value: 'Так' },
    { id: 19, headerStyle: s.headerStyle, name: 'Робота з зображенням', value: '' },
    { id: 20, name: 'Кут огляду', value: '150 граді' },
    { id: 21, name: 'Виявлення руху', value: 'Так' },
    { id: 22, headerStyle: s.headerStyle, name: 'Інтерфейси', value: '' },
    { id: 23, name: 'Бездротовий інтерфейс', value: 'Так' },
    { id: 24, name: 'Порт для SD-карти', value: 'Так' },
    { id: 25, name: 'Вбудований мікрофон', value: 'Так' },
    { id: 26, headerStyle: s.headerStyle, name: 'Загальні', value: '' },
    { id: 27, name: 'Антивандальный корпус', value: 'Так' },
    { id: 28, name: 'Підігрів корпусу', value: 'Ні' },
    { id: 29, name: 'Захист обладнання від води і пилу IP', value: 'IP47' },
    { id: 30, name: 'Кут повороту', value: '180 град.' },
    { id: 31, name: 'Кут нахилу', value: '180 град.' },
    { id: 32, name: 'Живлення', value: 'Спеціальний акумулятор' },
    { id: 33, name: 'Додаткове джерело живлення', value: 'Мережа 12В, Мережа 220В, Батарейки акумуляторного типу, Спеціальний акумулятор, Мережа 24В, PoE' },
    { id: 34, name: 'Мінімальна робоча температура', value: '0 град.' },
    { id: 35, name: 'Максимальна робоча температура', value: '90 град.' },
    { id: 36, name: 'Гарантійний термін', value: '12 міс' }
]
//
const CameraContent5 = () => {
    const head = 'Характеристики та опис';

    const [futuresHeight, setFuturesHeight] = useState(false)
    const [allOptions, setAllOptions] = useState('всі характеристики')

    useEffect(() => {
        futuresHeight ? setAllOptions('згорнути') : setAllOptions('всі характеристики')
    })
    // document.getElementById('allAttributeListContainer').style.l
    return (
        <div
            className={s.content5Main}
            style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }}>
            <div className={s.futures}>
                <h2 >
                    {head.toUpperCase()}
                </h2>
            </div>

            <div id="allAttributeListContainer" className={s.allAttributeListContainer} style={{ height: futuresHeight ? window.innerWidth <= 599 ? '290vh' : '240vh' : '40vh' }} >
                {allAttributes.map((el, i) => {
                    return (
                        <div key={i} className={s.allAttributeList}>
                            <div className={s.left}>
                                <span className={el.headerStyle}>
                                    {el.name}
                                </span>
                            </div>
                            <div className={s.right}>
                                <span>
                                    {el.value}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={s.buttonAllFeatures}
                onClick={() => setFuturesHeight(!futuresHeight)}
                style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }}>
                {futuresHeight 
                   ? <>
                   <div className={s.triangleUp}></div>
                    <h2>
                        {allOptions.toUpperCase()}
                    </h2>
                    </>
                    : <>
                    <h2>
                        {allOptions.toUpperCase()}
                    </h2>
                    <div className={s.triangleDown}></div>
                    </>
                }
            </div>
            <h1>Some Text</h1>
        </div>
    )
}
// 
export default CameraContent5