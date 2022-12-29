import { Link } from "react-router-dom"
import style from "./header.module.css"

export default function Header() {
    return (
        <header className={style.container}>

            <div className={style.linkContainer}>
                <Link to="/sobre" className={style.link}>
                    Sobre
                </Link>
            </div>

            <span className={style.title}>
                <Link to="/" className={style.titleLink}>
                    Calcule seu índice de massa corporal
                </Link>

            </span>
        </header>
    )
}