import React from "react";
import s from './cameraContent.module.scss'

const preferences = [
    { id: 4, head: 'Зручно: ', description: 'відсутні кабелі. Просто покладіть пристрій на зарядну плату, і зарядка почнеться.Заряджає і прилипає без чохла Magsafe:', magnet: '' },
    { id: 5, head: 'Захищає від пошкоджень:', description: `ви не підключаєте кабель до вашого пристрою, що зменшує ризик пошкодження роз'єму або порту зарядки;`, magnet: s.magnet },
    { id: 6, head: 'Мобільно: ', description: `менші та легші, що ідеально для подорожей.`, magnet: s.magnet },
    { id: 7, head: 'Естетично:', description: `Дизайн в кращих традиціях Apple. `, magnet: s.magnet },
]

const MagsafeContent9 = () => {

    return (
        <div style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} className={s.content9main}>

            <div className={s.descriptions}>
                <h1>Зацініть переваги MagSafe</h1>
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