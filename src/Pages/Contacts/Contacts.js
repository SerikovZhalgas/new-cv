import style from './Contacts.module.scss'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-reveal/Zoom';

export const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <Zoom cascade>
                <h3 className={style.title}>
                    <FontAwesomeIcon icon={faMessage} className='fa-lg'/>
                    <div className={style.titleText}>
                        Contacts
                    </div>
                </h3>
                <hr/>
                <div className={style.contactsText}>
                    <div>
                        <strong>WhatsApp:</strong> +7-(747)-538-36-21
                    </div>
                    <div>
                        <strong>Email:</strong> zhalgasserikov@gmail.com
                    </div>
                    <div>
                        <strong>Telegram:</strong> @Zhalgasserikov
                    </div>
                </div>
            </Zoom>
        </div>
    );
}