import Footer from "../Footer"
import Header from "../Header"
import styles from "./about.module.css"

export default function About() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title} >Sobre a página</h1>
                <p className={styles.text}>
                    Esta página é uma recriação de um projeto pessoal de estudos de
                    calculadora de imc, desta vez, usando React.
                    <br />
                    A versão original
                    era em HTML e CSS puro junto com JavaScript para os calculos.
                </p>
            </div>
            <Footer />
        </>
    )
}