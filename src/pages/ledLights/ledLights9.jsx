import React from "react";
import s from './ledLights.module.scss'

const preferences = [
    { id: 4, head: 'Довжина: ', description: 'Довжина основного дроту – 3.0 м;', magnet: '' },
    { id: 5, head: 'Додатковий шнур:', description: `Шнур від гірлянди до розетки – ще 70 см, що дає вам свободу в аранжуванні гірлянди;`, magnet: s.magnet },
    { id: 6, head: '10 ниток різної довжини: ', description: `10 ниток різної довжини, що чергуються від 50 см до 70 см, завдяки чому  ви зможете створити унікальний і стильний дизайн;`, magnet: s.magnet },
    { id: 7, head: 'Прозорі кулі:', description: `Прозорі кулі з діаметром 8 см додають гірлянді легкості і витонченості;`, magnet: s.magnet },
    { id: 8, head: '8 режимів:', description: `8 режимів миготіння світлодіодів, які світять теплим білим кольором з м'яким жовтим відтінком;`, magnet: s.magnet },
]

const MagsafeContent9 = () => {

    return (
        <div style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} className={s.content9main}>

            <div className={s.descriptions}>
                <h1>Технічні характеристики:</h1>
                <ul>
                    {preferences.map((el, i) => {
                        return (
                            <div key={i} className={s.listItem}>
                                <span className={s.head}>{el.head}</span>
                                <span className={s.magnet}>{el.description}</span>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MagsafeContent9;