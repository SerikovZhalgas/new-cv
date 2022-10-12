import style from './Footer.module.css'
import React from "react";
import {faLinkedin, faInstagram, faVk, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';

export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <Zoom cascade>
                <div className={style.text}>
                    <h1 className={style.name}>Zhalgas Serikov</h1>
                    <ReactTypingEffect
                        text="Front-End Developer"
                        className={style.devText}
                        speed={100}
                    />
                </div>
                <div className={style.socialNetContainer}>
                    <a href="https://www.instagram.com/jalgas.97/">
                        <FontAwesomeIcon icon={faInstagram} className="fa-inverse fa-lg"/>
                    </a>
                    <a href="www.linkedin.com/in/ZhalgasSerikov
">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-inverse fa-lg"/>
                    </a>
                    <a href="https://vk.com/idzhalgasserikov">
                        <FontAwesomeIcon icon={faVk} className="fa-inverse fa-lg"/>
                    </a>
                    <a href="https://github.com/SerikovZhalgas">
                        <FontAwesomeIcon icon={faGithub} className="fa-inverse fa-lg"/>
                    </a>
                </div>
            </Zoom>
        </div>
    );
}
