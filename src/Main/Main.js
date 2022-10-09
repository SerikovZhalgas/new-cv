import style from './Main.module.scss'
import {Footer} from "../Pages/Footer/Footer";
import React from "react";
import myAvatar from '../common/assets/myAvatar.jpg'
import background1 from '../common/assets/background/background1.png'
import background2 from '../common/assets/background/background2.jpg'
import background3 from '../common/assets/background/background3.jpg'
import background4 from '../common/assets/background/background4.jpg'
import background5 from '../common/assets/background/background5.jpg'

export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={style.mainBlockContainer}>
                <div className={style.backgroundPhotoBlock}>
                    <img src={background4} alt="background-photo" className={style.backgroundPhoto}/>
                </div>
                <div className={style.photoBlock}>
                    <img src={myAvatar} alt="avatar" className={style.photo}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
