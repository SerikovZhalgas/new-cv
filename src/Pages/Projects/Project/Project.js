import style from './Project.module.scss'

export const Project = (props) => {

    return (
        <div className={style.project}>
            <div className={style.img} style={props.style}>
                <a href="src/Pages/Projects/Project/Project" className={style.button}>Посмотреть</a>
            </div>
            <div className={style.projectDescription}>
                <h3 className={style.title}>
                        {props.title}
                </h3>
                <div className={style.description}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}