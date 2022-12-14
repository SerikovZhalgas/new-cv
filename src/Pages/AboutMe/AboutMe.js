import style from './AboutMe.module.scss'
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {ListYearText} from "../../common/component/ListYearText/ListYearText";
import Zoom from 'react-reveal/Zoom';

const education = [
    {year: '2015-2019', text: 'S.Seifullin Kazakh Agro Technical University'},
    {year: '2022', text: 'It-Incubator'}
]

const experience = [
    {year: '2019-2022', text: 'KazImpex company as Information system engineer'},
    {year: '2022', text: 'Izipaq company as BPM Developer'},
    {year: '2022', text: 'Freelance as React Front-End Developer'}
]

export const AboutMe = () => {

    return (
        <div className={style.aboutMeBlock}>
            <Zoom cascade>
                <div className={style.aboutMe}>
                    <h2 className={style.title}>
                        <FontAwesomeIcon icon={faPerson} className='fa-lg'/>
                        <div className={style.titleText}>
                            About Me
                        </div>
                    </h2>
                    <hr/>
                    <div className={style.textBLock}>
                        <p>
                            My one of strong qualities is adaptable. In my work experiences I was very curious about the work process. And the other qualities is friendly and modesty. In my opinion, it's two qualities are very important because I appreciate the feelings of my companion.
                        </p>
                        <p>
                            In free time I practice new features, learn programming architectures, read books of programming language.
                        </p>
                        <p>My goal right now is to find a position at a company where I can grow and take on new
                            challenges over time. My short term plans:</p>
                        <ul>
                            <li>
                                Learn a new set of skills.
                            </li>
                            <li>
                                Gain experience in team-building
                            </li>
                            <li>
                                Advance into a supervisory role
                            </li>
                            <li>
                                Increase your performance standard
                            </li>
                        </ul>
                    </div>
                    <div className={style.textBLock}>
                        <div className={style.textAboutMe}>
                       <span>
                            <p><strong>AGE</strong>: 25</p>
                           <p><strong>FREELANCE</strong>: Available</p>
                        </span>
                            <span>
                            <p><strong>RESIDENCE</strong>: Kazakhstan</p>
                            <p><strong>ADDRESS</strong>: Nur-sultan, Kazakhstan</p>
                        </span>
                        </div>
                    </div>
                </div>
                <ListYearText title={'Education'} list={education}/>
                <ListYearText title={'Experience'} list={experience}/>
            </Zoom>
        </div>
    );
}