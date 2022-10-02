import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComputer} from "@fortawesome/free-solid-svg-icons";
import TypeScriptLogo from '../../common/svg/typescript-svgrepo-com.svg'
import GitLogo from '../../common/svg/git-svgrepo-com.svg'
import HTMLLogo from '../../common/svg/html-svgrepo-com.svg'
import JSLogo from '../../common/svg/js-svgrepo-com.svg'
import ReactLogo from '../../common/svg/react-svgrepo-com.svg'
import NodeJSLogo from '../../common/svg/node-svgrepo-com.svg'
import CSSLogo from '../../common/svg/css-svgrepo-com.svg'
import {SkillsContainer} from "../../common/component/SkillsContainer/SkillsContainer";

const myLibraries = [
    {title: 'Redux/Redux Toolkit'},
    {title: 'Redux-thunk'},
    {title: 'React-redux'},
    {title: 'Axios'},
    {title: 'Storybook'},
    {title: 'React-router-dom'},
    {title: 'Jest'},
    {title: 'SASS'},
    {title: 'MaterialUI'},
    {title: 'Formik'}
]

const architecturesAndPrinciples = [
    {title: 'OOP'},
    {title: 'SOLID'},
    {title: 'TDD'},
    {title: 'FLUX'},
    {title: 'DDD'},
    {title: 'KISS'},
    {title: 'DRY'}
]

const baseKnowledge = [
    {title: 'SQL'},
    {title: 'PostgreSQL'},
    {title: 'Express'}
]

export const Skills = () => {

    return (
        <div className={style.mainSkillsBlock}>
            <h3 className={style.title}>
                <FontAwesomeIcon icon={faComputer} className='fa-lg'/>
                <div className={style.titleText}>
                    My skills
                </div>
            </h3>
            <hr/>
            <div className={style.skillsBlock}>
                <div className={style.skills}>
                    <Skill icon={ReactLogo} title={'React'} rating={5}/>
                    <Skill icon={JSLogo} title={'JavaScript'} rating={4}/>
                    <Skill icon={TypeScriptLogo} title={'TypeScript'} rating={4}/>
                    <Skill icon={NodeJSLogo} title={'Node.js'} rating={3}/>
                    <Skill icon={GitLogo} title={'Git'} rating={3}/>
                    <Skill icon={HTMLLogo} title={'HTML'} rating={4}/>
                    <Skill icon={CSSLogo} title={'CSS'} rating={4}/>
                </div>
            </div>
            <SkillsContainer skills={myLibraries} title={'React libraries'}/>
            <SkillsContainer skills={architecturesAndPrinciples} title={'Programming Architectures and Principles'}/>
            <SkillsContainer skills={baseKnowledge} title={'Base knowledge'}/>
        </div>
    )
}