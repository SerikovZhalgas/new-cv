import style from './Skill.module.scss'
import {Rating} from "../../../common/component/Rating/Rating";
import Zoom from 'react-reveal/Zoom';

export const Skill = (props) => {

    return (
        <div className={style.skill}>
            <Zoom cascade>
                <div className={style.skillTitle}>
                    <img src={`${props.icon}`} alt="icon" className={style.icon}/>
                    <span className={style.title}>{props.title}</span>
                </div>
                <div className={style.rating}>
                    <Rating value={props.rating}/>
                </div>
            </Zoom>
        </div>
    );
}