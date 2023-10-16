
import React, { useEffect, useState } from "react";
import s from './quizz.module.scss'
import childInRoom from '../statik/NoImageAvailable.jpg';
import petsCam from '../statik/NoImageAvailable.jpg';
import offeceHome from '../statik/NoImageAvailable.jpg'
import office from '../statik/NoImageAvailable.jpg'
import kidsAndPets from '../statik/NoImageAvailable.jpg'
import { useDispatch } from "react-redux";
import { goalVariant } from "../../../store/goalVariants/actionsGoal";

const mainQuiz = [{
    image: offeceHome, quizz: 'Ви плануєту використовувати камеру для дому чи офісу?',
    variant2: 'Для дому', variant1: 'Для офісу',
}]
const forHome = [
    {
        image: kidsAndPets, quizz: 'Ви плануєте убезпечити дітей чи домашніх улюбленців?',
        variant1: 'Дітей', variant2: 'Домашніх улюбленців'
    }
]
const forOffice = [
    { image: office, head: 'Безпека приміщення:', description: ' Камера дозволяє забезпечити безпеку приміщення та контроль над робочим простором. Вона може фіксувати події, які відбуваються в офісі, такі як вхід та вихід співробітників, що дозволяє запобігати несанкціонованому доступу.', description2: '' },
    { image: '', head: 'Моніторинг роботи:', description: ' Камера допомагає моніторити роботу співробітників та взаємодію з клієнтами. Це може бути корисним для контролю якості обслуговування та виявлення можливих проблем у роботі команди.', description2: '' },
    { image: '', head: 'Зберігання доказів:', description: ' Камера може фіксувати важливі моменти та події, які можуть бути використані як докази у випадку конфліктних ситуацій або непорозумінь.', description2: '' },
]
const forPets = [
    { image: petsCam, head: 'Віддалений догляд.', description: ' Камера дозволяє стежити за домашніми тваринами навіть коли ви не знаходитесь вдома. Ви можете з легкістю перевірити, як вони себе почувають та чи потребують уваги.', description2: '' },
    { image: '', head: 'Безпека та контроль.', description: ' Камера допомагає забезпечити безпеку та контроль над домашніми тваринами. Ви можете виявити будь-які незвичайні дії або ситуації та прийняти відповідні заходи.', description2: '' },
    { image: '', head: 'Запис цікавих моментів.', description: ' Камера допомагає зафіксувати цікаві та смішні моменти з життя вашої тварини. Ви можете зберегти ці спогади на довгий час та поділитися ними з родиною та друзями.', description2: '' },
    { image: '', head: 'Повідомлення про активність.', description: ' Камера може надсилати повідомлення про активність вашої домашньої тварини. Наприклад, вона може сповістити вас, коли ваш улюбленець рухається або гавкає.', description2: '' },
]
const forChildren = [
    { image: childInRoom, head: 'Віддалений догляд:', description: ' Камера дозволяє батькам стежити за своїми дітьми навіть коли вони не знаходяться поруч. Ви можете спостерігати за дитиною з будь-якого місця, що забезпечує вам спокій та впевненість у її безпеці.', description2: '' },
    { image: '', head: 'Безпека та контроль:', description: ' Камера допомагає забезпечити безпеку та контроль за дітьми вдома. Ви можете впевнитися, що вони безпечно проводять час та виявити будь-які незвичайні ситуації.', description2: '' },
    { image: '', head: 'Запис цікавих моментів:', description: ' Камера допомагає зафіксувати цікаві та незабутні моменти з життя дітей. Ви можете зберегти ці спогади на довгий час та поділитися ними з родиною.', description2: '' },
    { image: '', head: 'Повідомлення про активність:', description: ' Камера може сповіщати батьків про активність дітей. Наприклад, вона може повідомити, коли дитина прокидається або рухається.', description2: '' },
]

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
            case 'Для дому':
                setQuizzAsks(forHome[0])
                return (
                    setChangeContent(true)
                )
            case 'Для офісу':
                setQuizzAsks(forOffice)
                dispatch(goalVariant('Скільки камер Вам потрібно для офісу?'))
                return (
                    setChangeContent(false)
                )
            case 'Дітей':
                setQuizzAsks(forChildren)
                dispatch(goalVariant('Дітей'))
                return (
                    setChangeContent(false)
                )
            case 'Домашніх улюбленців':
                setQuizzAsks(forPets)
                dispatch(goalVariant('Домашніх улюбленців'))
                return (
                    setChangeContent(false)
                )
            default: break

        }
    }

    return (
        <div className={s.quizzMain}>
            <div className={s.quizz}>
                {changeContent
                    ? <>
                        <div className={s.asks}>{quizzAsks.quizz.toUpperCase()}</div>
                        <div className={s.unswers}>
                            <button onClick={() => setQuizzAnswers(quizzAsks.variant1)}>
                                {quizzAsks.variant1}
                            </button>
                            <button onClick={() => setQuizzAnswers(quizzAsks.variant2)}>
                                {quizzAsks.variant2}
                            </button>
                        </div>
                        <img className={s.imageQuiz} src={quizzAsks.image} alt="" />
                    </>
                    :
                    <div className={s.descriptions}>
                        {quizzAsks.map((el, i) => {
                            return (
                                <div key={i} className={s.descriptionItems}>
                                    <span className={s.head}>{el.head}</span>
                                    <span className={s.descrs} >{el.description}</span>
                                    <img src={el.image} alt="" />
                                </div>
                            )
                        })}
                    </div>

                }
            </div>
        </div>
    )
}

export default Quizz;