import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";
import todoImg from '../../common/assets/todolist.jpg'
import socialImg from '../../common/assets/social-network.jpg'
import futureImg from '../../common/assets/future-project.jpg'
import nbaImg from '../../common/assets/nba.jpg'
import Zoom from 'react-reveal/Zoom';

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todolist = {
        backgroundImage: `url(${todoImg})`
    }
    const nbaStat = {
        backgroundImage: `url(${nbaImg})`
    }
    const futureProj = {
        backgroundImage: `url(${futureImg})`
    }

    return (
        <div className={style.projectsBlock}>
            <Zoom cascade>
                <h3 className={style.title}>
                    <FontAwesomeIcon icon={faListCheck} className='fa-lg'/>
                    <div className={style.titleText}>
                        My projects
                    </div>
                </h3>
                <hr/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'}
                             description={'New smart of social network projects'}/>
                    <Project style={todolist} title={'Todolist'}
                             description={'Todolist - main project for create CRUD architecture'}/>
                    <Project style={futureProj} title={'Friday project'} description={'Someone project in the future'}/>
                    <Project style={nbaStat} title={'NBA Statistics'}
                             description={'More statistics about professional basketball game from NBA'}/>
                </div>
            </Zoom>
        </div>
    );
}