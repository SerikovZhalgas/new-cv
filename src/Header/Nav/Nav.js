import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser, faArrowTrendUp, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom';

export const Nav = () => {

    return (
        <div className={style.nav}>
            <Zoom cascade>
                <NavLink to={'/about'} className={`${style.item} ${style.up}`}>
                    <div className={style.text}>
                        <FontAwesomeIcon icon={faUser} className="fa-lg"/>
                        <div>Обо мне</div>
                    </div>
                </NavLink>
                <NavLink to={'/skills'} className={`${style.item} ${style.center}`}>
                    <div className={style.text}>
                        <FontAwesomeIcon icon={faArrowTrendUp} className="fa-lg"/>
                        Навыки
                    </div>
                </NavLink>
                <NavLink to={'/projects'} className={`${style.item} ${style.center}`}>
                    <div className={style.text}>
                        <FontAwesomeIcon icon={faBriefcase} className="fa-lg"/>
                        Проекты
                    </div>
                </NavLink>
                <NavLink to={'/contacts'} className={`${style.item} ${style.down}`}>
                    <div className={style.text}>
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                        Контакты
                    </div>
                </NavLink>
            </Zoom>
        </div>
    );
}