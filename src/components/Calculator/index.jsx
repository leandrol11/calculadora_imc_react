import { useState } from "react"
import Result from "../Result"
import style from "./form.module.css"

export default function Calculator() {
    const [finalImc, setFinalImc] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        verifyData(data)
    }

    const verifyData = (data) => {
        let weight = data.weight
        let height = data.height

        if (Number(weight) === 0 || Number(height) === 0) {
            alert("Os campos não podem ser igual a zero!")
            return
        } else if (isNaN(weight) || isNaN(height)) {
            alert("Você precisa escrever números!")
            return
        }
        imcCalculator(data)
    }

    const imcCalculator = (data) => {
        const imc = data.weight / (data.height * data.height)
        const refactorImc = + (parseFloat(imc).toFixed(2))

        setFinalImc(refactorImc)
    }

    return (
        <section className={style.container}>
            <div className={style.calculatorContainer}>

                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        className={style.input}
                        type="text"
                        name="weight"
                        required
                        placeholder="Seu peso com apenas números e ponto"
                    />

                    <input
                        className={style.input}
                        type="text"
                        name="height"
                        required
                        placeholder="Sua altura com apenas números e ponto"
                    />

                    <button
                        className={style.btn}
                        type="submit"
                    >
                        Calcular
                    </button>
                </form>

                <Result imc={finalImc} />
            </div>
        </section>
    )
}