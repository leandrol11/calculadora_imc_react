import Calculator from "../Calculator"
import InfoArea from "../InfoArea"
import style from "./mainContainer.module.css"

export default function MainContainer() {
    return (
        <main className={style.container}>
            <Calculator />
            <InfoArea />
        </main>
    )
}