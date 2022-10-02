import PurpleSquare from "../../svg/purple-square-svgrepo-com.svg";
import Square from "../../svg/square-svgrepo-com.svg";
import SelectCircle from "../../svg/check-circle-svgrepo-com.svg";
import Circle from "../../svg/check-circle-svgrepo-com (1).svg";
import style from './Rating.module.css'

export const Rating = (props) => {

    return (
        <div  className={style.starBlock}>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

const Star = (props) => {

    return <span>
            {
                props.selected
                    ? <b><img src={Circle} alt="selectIcon" className={style.icon}/></b>
                    : <img src={SelectCircle} alt="noSelectIcon" className={style.icon}/>
            }
    </span>

}