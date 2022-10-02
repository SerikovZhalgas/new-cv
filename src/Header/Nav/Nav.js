import style from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser, faArrowTrendUp, faBriefcase} from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {

    return (
        <div className={style.nav}>
            <NavLink to={'/about'} className={`${style.item} ${style.up}`}>
                <div className={style.text}>
                    <FontAwesomeIcon icon={faUser} className="fa-lg"/>
                    <div>ABOUT</div>
                </div>
            </NavLink>
            <NavLink to={'/skills'} className={`${style.item} ${style.center}`}>
                <div className={style.text}>
                    <FontAwesomeIcon icon={faArrowTrendUp} className="fa-lg"/>
                    SKILLS
                </div>
            </NavLink>
            <NavLink to={'/projects'} className={`${style.item} ${style.center}`}>
                <div className={style.text}>
                    <FontAwesomeIcon icon={faBriefcase} className="fa-lg"/>
                    PROJECTS
                </div>
            </NavLink>
            <NavLink to={'/contacts'} className={`${style.item} ${style.down}`}>
                <div className={style.text}>
                    <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                    CONTACT
                </div>
            </NavLink>
        </div>
    );
}