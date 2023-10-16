
import React, { useEffect, useState } from "react";
import s from './quizz.module.scss'
import { useDispatch } from "react-redux";

import petsCam from '../statik/NoImageAvailable.jpg';
import office from '../statik/NoImageAvailable.jpg'
import forOffice from '../statik/quizz/forOffice.jpg'
import extraCharge from '../statik/quizz/extraCharge.jpg';
import extraCharge1 from '../statik/quizz/extraCharge1.jpg';
import forTraveling from '../statik/quizz/forTraveling.jpg';
import vithoutCables from '../statik/quizz/vithoutCables.jpg';
import chargingSpeed from '../statik/quizz/chargingSpeed.jpg';
import simpleUsing from '../statik/quizz/simpleUsing.jpg';
import businessMeeteng from '../statik/quizz/forOffice2.jpg';
import forLunch from '../statik/quizz/forLunch1.jpg';
import OpenOfferForm from "../../../pageElements/openOfferForm/OpenOfferForm";



const mainQuiz = [{
    imageV1: extraCharge1, imageV2: extraCharge, quizz: 'Ви плануєте використовувати Magsafe як павербанк?', quizz1: 'Чи як зарядний пристрій?',
    variant1: 'Для додаткового заряджання в будь-який момент.', variant2: 'Для заряджання під час активного використання.',
}]

//user choice variant A
const likePowerbank = [{
    imageV1: forTraveling, imageV2: forOffice, quizz: 'Де ви частіше плануєте використовувати Magsafe PowerBank?', quizz1: 'або',
    variant1: 'Під час подорожей та поїздок.', variant2: 'Вдома або на роботі, коли немає доступу до зарядки.'
}]
const mainAdvantage = [{
    imageV1: vithoutCables, imageV2: chargingSpeed, quizz: 'Як ви вважаєте, яка є основна перевага павербанка з технологією Magsafe?', quizz1: 'або',
    variant1: 'Можливість заряджати пристрої без кабелів в будь-який час.', variant2: 'Більше додаткового заряду для тривалої роботи.'
}]
const extraCharger = [
    { image: office, head: 'Безпека приміщення:', description: ' Камера дозволяє забезпечити безпеку приміщення та контроль над робочим простором. Вона може фіксувати події, які відбуваються в офісі, такі як вхід та вихід співробітників, що дозволяє запобігати несанкціонованому доступу.', description2: '' },
    { image: '', head: 'Моніторинг роботи:', description: ' Камера допомагає моніторити роботу співробітників та взаємодію з клієнтами. Це може бути корисним для контролю якості обслуговування та виявлення можливих проблем у роботі команди.', description2: '' },
    { image: '', head: 'Зберігання доказів:', description: ' Камера може фіксувати важливі моменти та події, які можуть бути використані як докази у випадку конфліктних ситуацій або непорозумінь.', description2: '' },
]
//A

//user choice variant B
const likeCharger = [{
    imageV1: simpleUsing, imageV2: chargingSpeed, quizz: 'Що для вас є найважливішою рисою зарядного пристрою Magsafe?', quizz1: 'або',
    variant1: 'Зручність використання під час активного використання.', variant2: 'Швидкість зарядки та збереження продуктивності.'
}]
const mainReasonUsuallyUsing = [{
    imageV1: businessMeeteng, imageV2: forLunch, quizz: 'Як би ви використали зарядний пристрій Magsafe під час робочого дня?', quizz1: 'або',
    variant1: 'Використовував би його під час зустрічей та важливих розмов.', variant2: 'Заряджав би свій iPhone під час обідньої перерви та коротких перерв між зустрічами.'
}]
const simpleMagsafeCharger = [
    { image: petsCam, head: 'Віддалений догляд.', description: ' Камера дозволяє стежити за домашніми тваринами навіть коли ви не знаходитесь вдома. Ви можете з легкістю перевірити, як вони себе почувають та чи потребують уваги.', description2: '' },
    { image: '', head: 'Безпека та контроль.', description: ' Камера допомагає забезпечити безпеку та контроль над домашніми тваринами. Ви можете виявити будь-які незвичайні дії або ситуації та прийняти відповідні заходи.', description2: '' },
    { image: '', head: 'Запис цікавих моментів.', description: ' Камера допомагає зафіксувати цікаві та смішні моменти з життя вашої тварини. Ви можете зберегти ці спогади на довгий час та поділитися ними з родиною та друзями.', description2: '' },
    { image: '', head: 'Повідомлення про активність.', description: ' Камера може надсилати повідомлення про активність вашої домашньої тварини. Наприклад, вона може сповістити вас, коли ваш улюбленець рухається або гавкає.', description2: '' },
]
//B

const Quizz = () => {
    const [quizzAsks, setQuizzAsks] = useState(mainQuiz[0]);
    const [quizzAnswers, setQuizzAnswers] = useState('');

    const [changeContent, setChangeContent] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        quizzWariants()
    }, [quizzAnswers, changeContent])

    const quizzWariants = () => {
        switch (quizzAnswers) {
            case 'Для додаткового заряджання в будь-який момент.':
                setQuizzAsks(likePowerbank[0])
                return (
                    setChangeContent(true)
                )
            case 'Для заряджання під час активного використання.':
                setQuizzAsks(likeCharger[0])
                return (
                    setChangeContent(true)
                )
            //user choice variant A
            case 'Під час подорожей та поїздок.':
            case 'Вдома або на роботі, коли немає доступу до зарядки.':
                setQuizzAsks(mainAdvantage[0])
                return (
                    setChangeContent(true)
                )
            case 'Більше додаткового заряду для тривалої роботи.':
            case 'Можливість заряджати пристрої без кабелів в будь-який час.':
                setQuizzAsks(extraCharger)
                // dispatch(goalVariant('Дітей'))
                return (
                    setChangeContent(false)
                )
            //A
            //user choice variant B
            case 'Швидкість зарядки та збереження продуктивності.':
            case 'Зручність використання під час активного використання.':
                setQuizzAsks(mainReasonUsuallyUsing[0])
                return (
                    setChangeContent(true)
                )
            case 'Використовував би його під час зустрічей та важливих розмов.':
            case 'Заряджав би свій iPhone під час обідньої перерви та коротких перерв між зустрічами.':
                setQuizzAsks(simpleMagsafeCharger)
                return (
                    setChangeContent(false)
                )
            //B
            default: break
        }
    }

    return (
        <div className={s.quizzMain}>
            <div className={s.quizz}>
                {changeContent
                    ? <>
                        <div className={s.unswers}>
                            <div className={s.asks}>{quizzAsks.quizz.toUpperCase()}</div>
                            <div className={s.variant1}>
                                <img src={quizzAsks.imageV1} alt="" />
                                <button onClick={() => setQuizzAnswers(quizzAsks.variant1)}>
                                    {quizzAsks.variant1}
                                </button>
                            </div>
                            {quizzAsks.quizz1 && <div className={s.asks}>{quizzAsks.quizz1.toUpperCase()}</div>}
                            <div className={s.variant2}>
                                <img src={quizzAsks.imageV2} alt="" />
                                <button onClick={() => setQuizzAnswers(quizzAsks.variant2)}>
                                    {quizzAsks.variant2}
                                </button>
                            </div>
                        </div>
                        <img className={s.imageQuiz} src={quizzAsks.image} alt="" />

                        <div style={{marginTop: '1%'}}>
                            <OpenOfferForm />
                        </div>
                    </>
                    : <OpenOfferForm />
                }
            </div>
        </div>
    )
}

export default Quizz;