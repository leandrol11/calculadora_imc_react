import style from "./result.module.css"

export default function Result(props) {
    return (
        <div className={style.container}>
            <p className={style.phrase}>Seu imc é: </p><div className={style.result} >{props.imc}</div>
        </div>
    )
}