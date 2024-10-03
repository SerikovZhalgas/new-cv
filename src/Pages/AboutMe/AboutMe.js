import style from './AboutMe.module.scss'
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {ListYearText} from "../../common/component/ListYearText/ListYearText";
import Zoom from 'react-reveal/Zoom';

const education = [
    {year: '2015-2019', text: 'Казахский Агротехнический университет им. С.Сейфуллина'},
    {year: '2022', text: 'It-Incubator'}
]

const experience = [
    {year: '2019.10-2022.05', text: 'Инженер информационных систем спорткомлекса Жекпе-Жек в ТОО KazImpex'},
    {year: '2022.03-2022.12', text: 'Frontend разработчик в компании ТОО Обряд (частичная занятость, удаленная работа)'},
    {year: '2022.05-2023.09', text: 'BPM разработчик в компании ТОО Izipaq'},
    {year: '2023.01-2023.12', text: 'Frontend разработчик в компании ТОО Feligram (удаленная работа)'},
    {year: '2023.10-2023.12', text: 'Frontend разработчик в компании ТОО DigitalPax'},
    {year: '2024.01-2024.06', text: 'Frontend разработчик в компании ТОО Click Intellect'},
    {year: '2024.01-now', text: 'Frontend разработчик в компании ТОО Data40 (удаленная работа)'},
]

export const AboutMe = () => {

    return (
        <div className={style.aboutMeBlock}>
            <Zoom cascade>
                <div className={style.aboutMe}>
                    <h2 className={style.title}>
                        <FontAwesomeIcon icon={faPerson} className='fa-lg'/>
                        <div className={style.titleText}>
                            Обо мне
                        </div>
                    </h2>
                    <hr/>
                    <div className={style.textBLock}>
                        <p>
                            О себе - ежедневно обучаюсь, пишу чистый код, рефакторю, переиспользую код. Ответственно подхожу к работе, самоорганизован. Из хобби - обожаю баскетбол, настольный теннис.
                        </p>
                    </div>
                    <div className={style.textBLock}>
                        <div className={style.textAboutMe}>
                            <p><strong>Возраст</strong>: 27</p>
                            <p><strong>ГРАЖДАНСТВО</strong>: Казахстан</p>
                            <p><strong>АДРЕС</strong>: Астана</p>
                        </div>
                    </div>
                </div>
                <ListYearText title={'Образование'} list={education}/>
                <ListYearText title={'Опыт'} list={experience}/>
            </Zoom>
        </div>
    );
}