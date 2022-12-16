import style from "./header.module.css"

export default function Header() {
    return (
        <header className={style.container}>
            <span className={style.title}>
                Calcule seu índice de massa corporal
            </span>
        </header>
    )
}