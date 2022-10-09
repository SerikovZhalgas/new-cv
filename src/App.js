import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Pages} from "./Pages/Pages";
import {HashRouter} from "react-router-dom";

export const App = () => {

    return (
        <HashRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Main/>

                <Pages/>
            </div>
        </HashRouter>
    );
}