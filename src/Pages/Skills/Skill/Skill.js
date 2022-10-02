import style from './Skill.module.css'
import Square from '../../../common/svg/square-svgrepo-com.svg'
import PurpleSquare from '../../../common/svg/purple-square-svgrepo-com.svg'
import {Rating} from "../../../common/component/Rating/Rating";

export const Skill = (props) => {

    return (
        <div className={style.skill}>
            <div className={style.skillTitle}>
                <img src={`${props.icon}`} alt="icon" className={style.icon}/>
                <span className={style.title}>{props.title}</span>
            </div>
            <div className={style.rating}>
                <Rating value={props.rating}/>
            </div>
        </div>
    );
}