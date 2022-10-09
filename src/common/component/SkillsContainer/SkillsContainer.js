import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComputer} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import style from './skillsContainer.module.scss'

export const    SkillsContainer = (props) => {

    return (
        <div>
            <h3 className={style.title}>
                <FontAwesomeIcon icon={faComputer} className='fa-lg'/>
                <div className={style.titleText}>
                    {props.title}
                </div>
            </h3>
            <hr/>
            <div className={style.textBLock}>
                <div className={style.textEducation}>
                    {props.skills.map((e,i) => (<p key={i} className={style.textCoreSkills}>•	{e.title}</p>))}
                </div>
            </div>
        </div>
    )
}