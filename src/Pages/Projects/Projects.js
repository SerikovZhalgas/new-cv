import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListCheck} from "@fortawesome/free-solid-svg-icons";
import todoImg from '../../common/assets/todolist.jpg'
import socialImg from '../../common/assets/social-network.jpg'
import educationImg from '../../common/assets/education-img.jpg'
import nbaImg from '../../common/assets/nba.jpg'
import firebase from '../../common/assets/firebase_logo_shot.png'
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
    const educationProj = {
        backgroundImage: `url(${educationImg})`
    }
    const firebaseProj = {
        backgroundImage: `url(${firebase})`
    }

    return (
        <div className={style.projectsBlock}>
            <Zoom cascade>
                <h3 className={style.title}>
                    <FontAwesomeIcon icon={faListCheck} className='fa-lg'/>
                    <div className={style.titleText}>
                        Мои проекты
                    </div>
                </h3>
                <hr/>
                <div className={style.projects}>
                    {/*<Project*/}
                    {/*    style={educationProj}*/}
                    {/*    title={'Education'}*/}
                    {/*    description={'Create or learn with cards in the packs. Project create in a team of 3 person. Please use VPN, before passing. (Redux, TypeScript, RestAPI)'}*/}
                    {/*    link={'https://friday-project.vercel.app/#/'}*/}
                    {/*/>*/}
                    {/*<Project*/}
                    {/*    style={todolist}*/}
                    {/*    title={'To-do list'}*/}
                    {/*    description={'Todolist - project for create CRUD architecture. (Redux, TypeScript, RestAPI, unit-tests, Storybook) Also I have ReduxTLK version of project too.'}*/}
                    {/*    link={'https://serikovzhalgas.github.io/Todolist-final/'}*/}
                    {/*/>*/}
                    <Project
                        style={todolist}
                        title={'Social media'}
                        description={'React, ReduxTLK, RTK Query, FSD, Storybook, Jest, Webpack/Vite'}
                        link={'https://zhalgasserikov.netlify.app/'}
                    />
                    <Project
                        style={firebaseProj}
                        title={'To-do list'}
                        description={'JavaScript, FireBase: Authentication, Firestore Database'}
                        link={'https://serikovzhalgas.github.io/todolist-on-firebase/'}
                    />
                    <Project
                        style={social}
                        title={'Social media'}
                        description={'React, Redux, TypeScript'}
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