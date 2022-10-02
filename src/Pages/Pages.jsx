import React from 'react'
import {Error404} from "./Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {AboutMe} from "./AboutMe/AboutMe";
import styles from './Pages.module.css'

export const PATH = {
    ABOUT: '/about',
    SKILLS: '/skills',
    PROJECTS: '/projects',
    CONTACTS: '/contacts'
}

export const Pages = () => {

    return (
        <div className={styles.pagesBlock}>
            <Routes>
                <Route path={'/*'} element={<Navigate to={PATH.ABOUT}/>}/>

                <Route path={PATH.ABOUT} element={<AboutMe/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.PROJECTS} element={<Projects/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}
