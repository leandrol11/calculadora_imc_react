import style from "./infoText.module.css"
export default function InfoText() {
    return (
        <div className={style.text}>
            <h2 className={style.title}> Como funciona a fórmula do IMC ?</h2>
            <p>
                A fórmula é o peso dividido pela altura ao quadrado.
                A resposta representa o quanto a pessoa tem de massa muscular,
                massa de gordura e massa óssea. Quando o índice de massa corporal
                recomendado está excedido,
                é porque a pessoa pode estar numa situação
                de sobrepeso com tendência à obesidade ou já ter a obesidade.
                O contrário também é válido, e índice estiver muito
                abaixo da normalidade, a pessoa pode estar em desnutrição,
                com perda expressiva de massa. Portanto, dependendo do resultado,
                é importante procurar um
                médico para avaliar a situação.
            </p>
            <p>
                Fonte: Ministério da Saúde
            </p>
        </div>
    )
}