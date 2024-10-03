import style from './Main.module.scss'
import {Footer} from "../Pages/Footer/Footer";
import React from "react";
import myAvatar from '../common/assets/myAvatar.jpg'
import background4 from '../common/assets/background/background4.jpg'
import Zoom from 'react-reveal/Zoom';

export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <Zoom cascade>
                <div className={style.mainBlockContainer}>
                    <div className={style.backgroundPhotoBlock}>
                        <img src={background4} alt="background-photo" className={style.backgroundPhoto}/>
                    </div>
                    <div className={style.photoBlock}>
                        <img src={myAvatar} alt="avatar" className={style.photo}/>
                    </div>
                    <Footer/>
                </div>
            </Zoom>
        </div>
    );
}
