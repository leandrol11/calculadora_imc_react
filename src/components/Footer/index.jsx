import style from "./footer.module.css"
import github from "./github.svg"

export default function Footer() {
    return (
        <footer className={style.container}>
            <span className={style.text}>
                Made by Leandro Maciel
            </span>
            <a href="https://github.com/leandrol11">
                <img className={style.img} src={github} alt="Icon do github" />
            </a>
        </footer >
    )
}