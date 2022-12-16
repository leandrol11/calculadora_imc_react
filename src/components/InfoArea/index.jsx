import InfoTable from "../InfoTable"
import InfoText from "../InfoText"
import style from "./infoArea.module.css"

export default function InfoArea() {
    return (
        <section className={style.container}>
            <InfoTable />
            <InfoText />
        </section>
    )
}