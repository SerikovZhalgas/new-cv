import style from './Skills.module.scss'
import React from "react";
import {SkillsContainer} from "../../common/component/SkillsContainer/SkillsContainer";
import Zoom from 'react-reveal/Zoom';

const mySkills = [
    {title: 'React'},
    {title: 'Typescript'},
    {title: 'Redux/Redux Toolkit'},
    {title: 'Webpack/Vite'},
    {title: 'HTML/CSS'},
]

const myLibraries = [
    {title: 'Docker'},
    {title: 'RTK Query'},
    {title: 'React-router-dom'},
    {title: 'Axios'},
    {title: 'i18n'},
    {title: 'Formik'},
    {title: 'React-hook-form'},
    {title: 'ChartJs'},
    {title: 'DraftJs'},
    {title: 'Jest'},
    {title: 'Storybook'},
    {title: 'SASS'},
    {title: 'MaterialUI'},
    {title: 'Ant Design'},
    {title: 'Eslint'},
    {title: 'StyleLint'},
    {title: 'Prettier'},
]

const architecturesAndPrinciples = [
    {title: 'FSD'},
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
            <Zoom cascade>
                <SkillsContainer skills={mySkills} title={'React libraries'}/>
                <SkillsContainer skills={myLibraries} title={'React libraries'}/>
                <SkillsContainer skills={architecturesAndPrinciples} title={'Архитектуры и принципы программирования'}/>
                <SkillsContainer skills={baseKnowledge} title={'Базовые понимания'}/>
            </Zoom>
        </div>
    )
}