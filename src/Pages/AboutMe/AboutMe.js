import style from './AboutMe.module.css'
import {faBuildingColumns, faPerson, faBuilding} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {SkillsContainer} from "../../common/component/SkillsContainer/SkillsContainer";

const myCoreSkills = [
    {title: 'React'},
    {title: 'TypeScript/JavaScript'},
    {title: 'Redux/Redux Toolkit'},
    {title: 'Unit-tests'},
    {title: 'REST API'},
    {title: 'Storybook'},
    {title: 'Git'},
    {title: 'HTML, CSS'},
]


export const AboutMe = () => {

    return (
        <div className={style.aboutMeBlock}>
            <div className={style.aboutMe}>
                <h2 className={style.title}>
                    <FontAwesomeIcon icon={faPerson} className='fa-lg'/>
                    <div className={style.titleText}>
                        About Me
                    </div>
                </h2>
                <hr/>
                <div className={style.textBLock}>
                    <p>I am charitable, politeness and answerable person. Complete tasks within timeframes. Quick
                        understand into project details.</p>
                    <p>My goal right now is to find a position at a company where I can grow and take on new challenges
                        over time. My short term plans:</p>
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
            <div className={style.education}>
                <h3 className={style.title}>
                    <FontAwesomeIcon icon={faBuildingColumns} className='fa-lg'/>
                    <div className={style.titleText}>
                        Education
                    </div>
                </h3>
                <hr/>
                <div className={style.textBLock}>
                    <div className={style.textEducation}>
                        <p>
                            <strong>2015-2019</strong>
                        </p>
                        <p>
                            S.Seifullin Kazakh Agro Technical University
                        </p>
                    </div>
                    <div className={style.textEducation}>
                        <p>
                            <strong>2022</strong>
                        </p>
                        <p>
                            It-Incubator
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.education}>
                <h3 className={style.title}>
                    <FontAwesomeIcon icon={faBuilding} className='fa-lg'/>
                    <div className={style.titleText}>
                        Experience
                    </div>
                </h3>
                <hr/>
                <div className={style.textBLock}>
                    <div className={style.textEducation}>
                        <p>
                            <strong>2019-2022</strong>
                        </p>
                        <p>
                            KazImpex company as Information system engineer
                        </p>
                    </div>
                    <div className={style.textEducation}>
                        <p>
                            <strong>2022</strong>
                        </p>
                        <p>
                            Izipaq company as BPM Developer
                        </p>
                    </div>
                    <div className={style.textEducation}>
                        <p>
                            <strong>2022</strong>
                        </p>
                        <p>
                            Freelance as React Front-End Developer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}