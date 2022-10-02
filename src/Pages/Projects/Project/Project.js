import style from './Project.module.css'

export const Project = (props) => {

    return (
        <div className={style.project}>
            <div className={style.img}>
                <a href="src/Pages/Projects/Project/Project" className={style.button}>Посмотреть</a>
            </div>
            <div className={style.projectDescription}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}