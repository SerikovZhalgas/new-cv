import style from "./ListYearText.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const ListYearText = (props) => {
    return <div className={style.education}>
        <h3 className={style.title}>
            <FontAwesomeIcon icon={faBuildingColumns} className="fa-lg"/>
            <div className={style.titleText}>
                {props.title}
            </div>
        </h3>
        <hr/>
        <div className={style.textBLock}>
            {props.list.map((e,i)=>{
                return <div key={i} className={style.textEducation}>
                    <div>
                        <strong>{e.year} - </strong>{e.text}
                    </div>
                </div>
            })}
        </div>
    </div>;
}