import style from './Projects.module.css'
import {Project} from "./Project/Project";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {

    return (
        <div className={style.projectsBlock}>
            <h2 className={style.title}>
                <FontAwesomeIcon icon={faListCheck} className='fa-lg fa-inverse'/>
                <span>My projects</span>
            </h2>
            <hr/>
            <div className={style.projects}>
                <Project title={'Название проекта'} description={'Краткое описание проекта'}/>
                <Project title={'Название проекта'} description={'Краткое описание проекта'}/>
            </div>
        </div>
    );
}