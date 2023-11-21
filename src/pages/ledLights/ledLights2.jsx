import React from "react";
import s from './ledLights.module.scss';
import ButtonOffer from "./pageElements/buttonOffer/ButtonOffer";
import LedLights4 from "./ledLights4";
import ledLight1 from './statik/ledLight/ledLight7.webp'
import ledLight2 from './statik/ledLight/ledLight4.jpeg'
import ledLight3 from './statik/ledLight/ledLigntMain3.png'
import powerWatt from './statik/powerWatt.png'
import mAh5000 from './statik/mAh5000.png'
import magnetic from './statik/magnetic.png'
import ActionPrices from "./actionsPrices/ActionPrices";
import frizeestar from './statik/ledLight/frizeestar.png'
import LedLights3 from "./ledLights3";

const LedLights2 = ({ page, linkOfOffer }) => {

    let day = 2.5
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + (day * 24));

    const priorityArr = [
        { id: 1, icon: magnetic, description: 'Магнітне кріплення' },
        { id: 2, icon: mAh5000, description: 'Ємність 3000mAh' },
        { id: 3, icon: powerWatt, description: 'Потужність 20W' },
    ]

    return (
        <div className={s.content2Main} style={{ width: window.innerWidth }}>

            <ActionPrices linkOfOffer={linkOfOffer} backgrount={'white'} />

            <div className={s.offerButton}>
                <ButtonOffer buttonPlace='1' />
            </div>
            <div>

            </div>
            <LedLights4 page={page} />


            <div className={s.ledlight3Video}>
                <h3>Перегляньте коротке відео:</h3>
                <LedLights3 />
            </div>

            
            <div className={s.offerButton}>
                <ButtonOffer buttonPlace='1' buttontext={'Купити зараз'} />
            </div>
            <ActionPrices linkOfOffer={linkOfOffer} backgrount={'white'} />

            <div className={s.paragraphMainAssigns}>
                <span>Серед переваг:</span>
            </div>
            <div className={s.topImage} style={{ width: window.innerWidth }}>
                <h2>Безпечно</h2>
                <div className={s.frizeestarImgsContainer}>
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                </div>
                <div className={s.descriptions}>
                    <div className={s.context}>
                        Завдяки спеціальним технологіям, вона не нагрівається, а отже, ви можете насолоджуватися атмосферою свята, не хвилюючись про непередбачені ситуації.
                    </div>
                </div>
                <img src={ledLight1} style={{ width: window.innerWidth }} alt="" />
            </div>

            <div className={s.topImage} style={{ width: window.innerWidth }}>
                <h2>Атмосферно</h2>
                <div className={s.frizeestarImgsContainer}>
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                </div>
                <div className={s.descriptions}>
                    <div className={s.context}>
                        Прозорі силіконові дроти та сфери гірлянди створюють легкий та пишний LED-декор, ідеально вписуючись у будь-який інтер'єр.
                    </div>
                </div>
                <img src={ledLight2} style={{ width: window.innerWidth }} alt="" />
            </div>

            <div className={s.topImage} style={{ width: window.innerWidth }}>
                <h2 style={{ fontSize: '1.4rem' }}>Гарантований святковий настрій</h2>
                <div className={s.frizeestarImgsContainer}>
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                    <img className={s.frizeestarImgs} src={frizeestar} alt="frizeestarImg" />
                </div>
                <div className={s.descriptions}>
                    <div className={s.context}>
                        Наші гірлянди не лише додають святкового блиску та тепла вашому інтер'єру, але й перетворюють приміщення в казкову країну, наповнену веселим настроєм.
                    </div>
                </div>
                <img src={ledLight3} style={{ width: window.innerWidth }} alt="" />
            </div>

        </div>
    )
}

export default LedLights2