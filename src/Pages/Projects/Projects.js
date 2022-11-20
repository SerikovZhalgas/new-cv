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
                    <Project
                        style={futureProj}
                        title={'Education'}
                        description={'Create or learn with cards in the packs. Project create in a team of 3 person. Please use VPN, before passing. (Redux, TypeScript, RestAPI)'}
                        link={'https://friday-project.vercel.app/#/'}
                    />
                    <Project
                        style={todolist}
                        title={'To-do list'}
                        description={'Todolist - project for create CRUD architecture. (Redux, TypeScript, RestAPI, unit-tests, Storybook) Also I have ReduxTLK version of project too.'}
                        link={'https://serikovzhalgas.github.io/Todolist-final/'}
                    />
                    <Project
                        style={social}
                        title={'Social network'}
                        description={'In progress... Design update coming soon! (Redux, TypeScript, RestAPI, func/class components, hooks)'}
                        link={'https://serikovzhalgas.github.io/social-network/#/social-network/profile'}
                    />
                    {/*<Project
                        style={nbaStat}
                        title={'NBA Statistics'}
                        description={'More statistics about professional basketball game from NBA'}
                        link={}
                    />*/}
                </div>
            </Zoom>
        </div>
    );
}